import { useEffect, useState } from "react";
import { Upload, message, Alert, Image, Spin, Button } from "antd";

import {
  connectWallet,
  mintNFT,
  getCurrentWalletConnected,
  addWalletListener,
} from "./utils/interact";
import "antd/dist/antd.css";

import MetaMask from "./assets/metamask.svg";
import EthereumIcon from "./assets/ethereum.svg";
import { pinFileToIPFS, convertToMB } from "./utils/pinata";
import CONFIG from "./config";

const { Dragger } = Upload;

const Minter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [url, setURL] = useState("");
  const [uploading, setUploading] = useState(false);
  const [mintingNFT, setMintingNFT] = useState(false);

  /**
   * Define the props to use to upload our files
   */
  const inputProps = {
    name: "file",
    multiple: false,
    beforeUpload: (file) => {
      message.success("uploading files, please hodl on!");
    },
    disabled: uploading,
    customRequest: (file) => {
      const fileSize = file.file.size;
      const sizeMB = convertToMB(fileSize);
      setUploading(true);
      // add confirmation to prevent really large files
      if (sizeMB > CONFIG.MAX_FILESIZE) {
        return message.error("Please upload a maximum file size of 5MB!");
      }
      return pinFileToIPFS(file)
        .then((data) => {
          setURL(data.pinataUrl);
          setStatus("🦊 Image Uploaded, proceed to mint your NTF");
          message.success(`file uploaded successfully.`);
        })
        .catch((err) => {
          message.error("There was an error", err.message);
        })
        .finally(() => {
          setUploading(false);
        });
    },
  };

  /**
   * immediately our app loads up, check if there is an active function
   */
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    // add a listener too for when wallet info changes
    addWalletListener(setWallet, setStatus);
  }, []);

  /**
   * @description When we press the buttont o connect our wallet, run this function
   */
  const connectWalletPressed = async () => {
    const { status, address } = await connectWallet(message);
    setStatus(status);
    setWallet(address);
  };
  /**
   * Function to mint the NFT image from the url we have
   */
  const onMintPressed = async () => {
    setMintingNFT(true);
    try {
      const { status } = await mintNFT(url);
      message.success("sucesfully minted image as NFT, check it out on etherscan")
      setStatus(status);
      // reset the state
      setURL("");
    } catch (err) {
      message.error("There was an error minting your NFT, Please connect your wallet first");
      // try connecting their wallet for them
      connectWalletPressed();
    } finally {
      setMintingNFT(false);
    }
    // setStatus(status);
  };

  const formatAddress = () =>
    "Connected: " +
    String(walletAddress).substring(0, 6) +
    "..." +
    String(walletAddress).substring(38);

  const walletButtomClass = walletAddress ? "--active" : "";

  return (
    <div className="Minter">
      {/* header section */}
      <div className="Minter__header">
        <div>
          <div className="Minter__header__title">🧙‍♂️ Xander NFT Minter</div>
          <p>
            Simply upload your asset, then press
            "Mint." and then HODL tight.
          </p>
        </div>
        <button
          id="walletButton"
          className={walletButtomClass}
          onClick={connectWalletPressed}
        >
          <img src={MetaMask} />
          {walletAddress.length > 0 ? (
            formatAddress()
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      </div>

      <div className="Minter__body">
        {!url ? (
          <div id="uploadsection">
            <Spin spinning={uploading} tip="Uploading image,HODL tight...">
              <Dragger {...inputProps}>
                <p className="ant-upload-drag-icon">
                  <img
                    src={EthereumIcon}
                    id="ethereum-icon"
                    alt="ethereum-icon"
                  />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
            </Spin>
          </div>
        ) : (
          <div className="uploadedimage-wrapper">
            <Spin spinning={mintingNFT} tip="Minting NFT,HODL tight...">
              <Image height={400} src={url} />
            </Spin>

            <div className="mint-nft">
              <Button
                disabled={mintingNFT}
                type="primary"
                size="large"
                onClick={onMintPressed}
              >
                {mintingNFT ? "Minting NFT" : "💥 Mint Image as NFT 💥"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Alert message={status} />
    </div>
  );
};

export default Minter;

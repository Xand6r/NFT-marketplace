import React from "react";
import CONFIG from "../config/index.js";
import { pinJSONToIPFS } from "./pinata.js";


const alchemyKey = CONFIG.ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = CONFIG.CONTRACT_ABI;
const contractAddress = CONFIG.CONTRACT_ADDRESS;

/**
 * Contains an helpoer function who's purpose is to connect a wallet to the DAPP
 * @returns {{address: String, status: JSX}}
 */
export const connectWallet = async (message=null) => {
  // if metamask is present
  if (window.ethereum) {
    // try connecting to it
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Upload the image you want to convert to an NFT.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      //   if we cannot connect to it then throw an error
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    // otherwise it means metamask isnt installed at all
    message && message.error("Please install metamask on this browser, link is in the message below")
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

/**
 * immediately our app loads up, we would want to check if we already have an existing connection to our wallet
 * @returns
 */
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Upload the image you want to convert to an NFT",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask on !ROPSTEN! using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

/**
 * Function to check if the current active wallet in meta mask has been changed
 * @param {React.useState} setWallet a react function to set the wallet
 * @param {React.useState} setStatus a react function to update the status of the dapp
 */
export function addWalletListener(setWallet, setStatus) {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus("👆🏽 Upload the image you want to convert to an NFT");
      } else {
        setWallet("");
        setStatus("🦊 Connect to Metamask on !ROPSTEN! using the top right button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your browser.
        </a>
      </p>
    );
  }
}

/**
 * An async function to pin the content of our upload to IPFS
 * @param {String} url t
 * @param {String} name
 * @param {String} description
 */
 export const mintNFT = async(tokenURI) => {
    
  //error handling
  if (tokenURI.trim() == "") { 
      return {
          success: false,
          status: "❗Please make sure URL are completed before minting.",
      }
  }
  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress);//loadContract();

  //set up your Ethereum transaction
  const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI).encodeABI() //make call to NFT smart contract 
  };

  //sign transaction via Metamask
  try {
      const txHash = await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      const url = "https://ropsten.etherscan.io/tx/" + txHash
      return {
          success: true,
          status: (<span>✅ Check out your transaction on Etherscan: <a href={url} target="_blank">{url}</a> </span>)
      }
  } catch (error) {
      return {
          success: false,
          status: "😥 Something went wrong: " + error.message
      }
  }
}

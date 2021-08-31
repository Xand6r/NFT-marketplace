/**
 * @description Create a file who's purpose is simply to load and export env variables and export them
 */
require("dotenv").config();

const CONFIG = {
    REACT_APP_ALCHEMY_KEY: process.env.REACT_APP_ALCHEMY_KEY,
    PINATA_KEY: process.env.REACT_APP_PINATA_KEY,
    PINATA_SECRET: process.env.REACT_APP_PINATA_SECRET,
    ALCHEMY_KEY: process.env.REACT_APP_ALCHEMY_KEY,
    PINATA_URL: "https://gateway.pinata.cloud/ipfs/",
    CONTRACT_ADDRESS: "0x23F078680AF893fb305100379e87261De649b821",
    CONTRACT_ABI: require('./contract-abi.json'),
    MAX_FILESIZE: 5 //MAXIMUM FILE SIZE in MB
}

export default CONFIG;
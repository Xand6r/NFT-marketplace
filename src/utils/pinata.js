import axios from 'axios';
import CONFIG from '../config';

const key = CONFIG.PINATA_KEY;
const secret = CONFIG.PINATA_SECRET;

/**
 * A utility function to convert size to bytes
 * @param {*} sizeInBytes 
 */
export const convertToMB = (sizeInBytes) => {
    return (sizeInBytes/1000000).toFixed(2);
}

/**
 * @description upload file to ipfs using pinata
 * @params { String } file the file we wish to upload
 */
export const pinFileToIPFS = async(file) => {
    const pinUrl = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append('file', file.file);
    // emp1.uid
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(pinUrl, data, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: CONFIG.PINATA_URL + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            alert('err')
            return {
                success: false,
                message: error.message,
            }
           
    });
};
export const pinJSONToIPFS = async(JSONBody) => {
    const pinUrl = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(pinUrl, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: CONFIG.PINATA_URL + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
           
    });
};
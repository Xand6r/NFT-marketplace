# 📝 XANDER NFT Minter Files

This repository contains the files for the NFT minter

## ℹ️ Repository Structure
```
`ethereum`: This folder contains all the components used to develop and deploy the NFT contract to the ropsten test network, it follows `hardhat` folder structure.
`src/utils`: This contains a set of utility functions whom enable us to interact with ipfs and the blockchain
    - `src/utils/interact.js` : This file contains functions which help to connect to to metmask 
    - `src/utils/pinata.js` : This file contains functinos which help to connect to to ipfs via pinata in order to upload files to IPFS. 

`src/config`: This contains configurations files and loads environmental variables 
`src/assets`: This contains images used throughout the application
`src/Minter.jsx`: This is the main react component to go through, it renders the NFT upload component and ties all the logic together
```

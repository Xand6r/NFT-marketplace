(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{335:function(e,t,n){},339:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},369:function(e,t){},393:function(e,t){},395:function(e,t){},472:function(e,t){},474:function(e,t){},484:function(e,t){},486:function(e,t){},511:function(e,t){},517:function(e,t){},530:function(e,t){},553:function(e,t){},700:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(38),i=n.n(s),u=(n(335),n(197)),o=n(28),p=n.n(o),c=n(49),d=n(101),l=n(708),y=n(327),m=n(707),b=n(709),f=n(196),h=n(710);n(336).config();var j={REACT_APP_ALCHEMY_KEY:"https://eth-ropsten.alchemyapi.io/v2/0SoCe8UhJaaYtCDidyCcgjvQSLPiRlJr",PINATA_KEY:"f76aa534c8cd3c29a901",PINATA_SECRET:"2e6415ebc09aded8a793cc164b91fd17e5c68d0164a9dd1685a49542dec29b19",ALCHEMY_KEY:"https://eth-ropsten.alchemyapi.io/v2/0SoCe8UhJaaYtCDidyCcgjvQSLPiRlJr",PINATA_URL:"https://gateway.pinata.cloud/ipfs/",CONTRACT_ADDRESS:"0x23F078680AF893fb305100379e87261De649b821",CONTRACT_ABI:n(339),MAX_FILESIZE:5},T=n(192),v=n.n(T),g=j.PINATA_KEY,w=j.PINATA_SECRET,x=function(){var e=Object(c.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinFileToIPFS",(n=new FormData).append("file",t.file),e.abrupt("return",v.a.post("https://api.pinata.cloud/pinning/pinFileToIPFS",n,{maxBodyLength:"Infinity",headers:{"Content-Type":"multipart/form-data; boundary=".concat(n._boundary),pinata_api_key:g,pinata_secret_api_key:w}}).then((function(e){return{success:!0,pinataUrl:j.PINATA_URL+e.data.IpfsHash}})).catch((function(e){return console.log(e),alert("err"),{success:!1,message:e.message}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(18),k=j.ALCHEMY_KEY,A=(0,n(701).createAlchemyWeb3)(k),M=j.CONTRACT_ABI,_=j.CONTRACT_ADDRESS,I=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Upload the image you want to convert to an NFT.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(O.jsx)("span",{children:Object(O.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd Upload the image you want to convert to an NFT"});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask on !ROPSTEN! using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(O.jsx)("span",{children:Object(O.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();function C(e,t){window.ethereum?window.ethereum.on("accountsChanged",(function(n){n.length>0?(e(n[0]),t("\ud83d\udc46\ud83c\udffd Upload the image you want to convert to an NFT")):(e(""),t("\ud83e\udd8a Connect to Metamask on !ROPSTEN! using the top right button."))})):t(Object(O.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(O.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}var F=function(){var e=Object(c.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.trim()){e.next=2;break}return e.abrupt("return",{success:!1,status:"\u2757Please make sure URL are completed before minting."});case 2:return e.next=4,new A.eth.Contract(M,_);case 4:return window.contract=e.sent,n={to:_,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,t).encodeABI()},e.prev=6,e.next=9,window.ethereum.request({method:"eth_sendTransaction",params:[n]});case 9:return a=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/"+a});case 13:return e.prev=13,e.t0=e.catch(6),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}(),S=(n(626),n.p+"static/media/metamask.45038d58.svg"),E=n.p+"static/media/ethereum.66aaf827.svg",R=l.a.Dragger,P=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),o=Object(d.a)(i,2),l=o[0],T=o[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),w=g[0],k=g[1],A=Object(a.useState)(!1),M=Object(d.a)(A,2),_=M[0],P=M[1],L=Object(a.useState)(!1),U=Object(d.a)(L,2),D=U[0],Y=U[1],B={name:"file",multiple:!1,beforeUpload:function(e){y.b.success("uploading files, please hold on!")},disabled:_,customRequest:function(e){var t=e.file.size,n=(t/1e6).toFixed(2);return P(!0),n>j.MAX_FILESIZE?y.b.error("Please upload a maximum file size of 5MB!"):x(e).then((function(e){k(e.pinataUrl),T("\ud83e\udd8a Image Uploaded, proceed to mint your NTF"),y.b.success("file uploaded successfully.")})).catch((function(e){y.b.error("There was an error",e.message)})).finally((function(){P(!1)}))}};Object(a.useEffect)(Object(c.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,n=t.address,a=t.status,s(n),T(a),C(s,T);case 8:case"end":return e.stop()}}),e)}))),[]);var H=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.status,a=t.address,T(n),s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.prev=1,e.next=4,F(w);case 4:t=e.sent,n=t.status,y.b.success("sucesfully minted image as NFT, check it out on etherscan"),T(n),k(""),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),y.b.error("There was an error minting your NFT, Please connect your wallet first"),H();case 15:return e.prev=15,Y(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,11,15,18]])})));return function(){return e.apply(this,arguments)}}(),q=r?"--active":"";return Object(O.jsxs)("div",{className:"Minter",children:[Object(O.jsxs)("div",{className:"Minter__header",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"Minter__header__title",children:"\ud83e\uddd9\u200d\u2642\ufe0f Xander NFT Minter"}),Object(O.jsx)("p",{children:'Simply upload your asset, then press "Mint." and then HODL tight.'})]}),Object(O.jsxs)("button",{id:"walletButton",className:q,onClick:H,children:[Object(O.jsx)("img",{src:S}),r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(O.jsx)("span",{children:"Connect Wallet"})]})]}),Object(O.jsx)("div",{className:"Minter__body",children:w?Object(O.jsxs)("div",{className:"uploadedimage-wrapper",children:[Object(O.jsx)(m.a,{spinning:D,tip:"Minting NFT,HODL tight...",children:Object(O.jsx)(b.a,{height:400,src:w})}),Object(O.jsx)("div",{className:"mint-nft",children:Object(O.jsx)(f.a,{disabled:D,type:"primary",size:"large",onClick:J,children:D?"Minting NFT":"\ud83d\udca5 Mint Image as NFT \ud83d\udca5"})})]}):Object(O.jsx)("div",{id:"uploadsection",children:Object(O.jsx)(m.a,{spinning:_,tip:"Uploading image,HODL tight...",children:Object(O.jsxs)(R,Object(u.a)(Object(u.a)({},B),{},{children:[Object(O.jsx)("p",{className:"ant-upload-drag-icon",children:Object(O.jsx)("img",{src:E,id:"ethereum-icon",alt:"ethereum-icon"})}),Object(O.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(O.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"})]}))})})}),Object(O.jsx)(h.a,{message:l})]})};var L=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(P,{})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,711)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),U()}},[[700,1,2]]]);
//# sourceMappingURL=main.a40cdbb2.chunk.js.map
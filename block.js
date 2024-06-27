var web3;
var address="";

async function Connect(){
  await window.web3.currentProvider.enable();
  web3 = new Web3(window.web3.currentProvider);
}
if(typeof web3 !== 'underfined'){
   web3 = new Web3(window.web3.currentProvider);
}
else{
   web3 = new Web3(window.web3.Provider.HttpProvider(""));
}
var abi=[];
var contract=new web3.eth.Contract(abi,address);

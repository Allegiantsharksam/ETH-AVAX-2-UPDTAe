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



function deposite(){
var inputval= document.getElementById("amount").value;
web3.eth.getAccounts().then(function(account){
  return contract.methods.deposite_money(inputval).send({from: account[0]});
}).then(function(tmp){
  $("#amount").val("");
show_balance();
}).catch(function(tmp){
  alert(tmp);
})
}



function withdraw(){
    var inputval= document.getElementById("amount").value;

web3.eth.getAccounts().then(function(account){
  return contract.methods.withdraw(inputval).send({from: account[0]});
}).then(function(tmp){
  $("#amount").val("");
show_balance();
}).catch(function(tmp){
  alert(tmp);
})
}

function show_balance(){
  contract.methods.getBalance().call().then(function(balance){
    $("balance").html(balance);
  })

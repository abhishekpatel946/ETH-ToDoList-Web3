// // TODO: -------------------------------------------------------------------------------------------
// // import
// const Web3 = require('web3')

// // connect with ganache locally
// const web3 = new Web3('HTTP://127.0.0.1:7545')

// // getBalance from local-net
// const currentBalance = async () => {
//     await web3.eth.getBalance('0xF9007e86f0a441dD794E27775C83EcCa64E42469')
//     .then((wei) => {
//         balance = web3.utils.fromWei(wei, 'ether')
//     })
//     .then(() => {
//         console.log('Account balance is: ', balance);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// } 

// // call the function
// currentBalance();


// // TODO: -------------------------------------------------------------------------------------------
// // import
// const Web3 = require('web3')
// const ABI = require('./ABI.json')

// // connect with ganache locally
// const web3 = new Web3('https://mainnet.infura.io/v3/4524ab38c02c40dfa9db1755851eb33a')

// // store the address of the ABI | Contract
// const constractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

// // instantiate the contract
// const contract = new web3.eth.Contract(ABI, constractAddress)

// // // methods inside the contract
// // console.log(contract.methods);

// // call the method from contract
// contract.methods.name().call()
//     .then((data) => { 
//         console.log('Name: ', data); 
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// contract.methods.symbol().call()
//     .then((data) => { 
//         console.log('Symbol: ', data); 
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// contract.methods.owner().call()
//     .then((data) => { 
//         console.log('Owner: ', data); 
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// // for balance use address
// const holderAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'

// contract.methods.balanceOf(holderAddress).call()
//     // .then((wei) => { 
//     //     data = web3.utils.fromWei(wei, 'ether')
//     // })
//     .then((data) => {
//         console.log('Balance: ', data); 
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// // TODO: -------------------------------------------------------------------------------------------
// // import
// const Web3 = require('web3')

// // connect with ganache locally
// const web3 = new Web3('HTTP://127.0.0.1:7545')

// // accounts
// Alice = {
//     name: 'Alice',
//     account: '0xF9007e86f0a441dD794E27775C83EcCa64E42469'
// }
// Bob = {
//     name: 'Bob',
//     account: '0x44EEC9ceb95Aaf3c03Ac79a5690ed21D8E934CE2'
// }

// // getBalance from local-net
// const currentBalance = async (holder, account) => {
//     await web3.eth.getBalance(account)
//     .then((wei) => {
//         balance = web3.utils.fromWei(wei, 'ether')
//     })
//     .then(() => {
//         console.log(holder, ' balance is: ', balance);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// // fetch the balance
// currentBalance(Alice.name, Alice.account)
// currentBalance(Bob.name, Bob.account)

// // send Transaction from one account to another
// const payment = async(to, from, amount) => {
//     await web3.eth.sendTransaction({
//         from: from,
//         to: to,
//         value: web3.utils.toWei(amount, 'ether')
//     })
//     .then(() => {
//         console.log('Payment Successfully Completed!');
//         currentBalance(from)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// // send transaction
// payment(Alice.account, Bob.account, 10)
// payment(Bob.account, Alice.account, 1)

// // TODO: -------------------------------------------------------------------------------------------
// const Tx = require('ethereumjs-tx')
// const Web3 = require('web3')

// const web3 = new Web3('https://ropsten.infura.io/v3/4524ab38c02c40dfa9db1755851eb33a')
   
// // accounts
// Alice = {
//     name: 'Alice',
//     address: '0xF9007e86f0a441dD794E27775C83EcCa64E42469',
//     privateKey: '82674c87f69a4a2c737519ffd9260bcf29ad096cd4c783f5adfb4cf9c4297cc8'
// }
// Bob = {
//     name: 'Bob',
//     address: '0x44EEC9ceb95Aaf3c03Ac79a5690ed21D8E934CE2',
//     privateKey: 'cb06448faa743d46456bf87ef02f9efcbad3bfcc7860ff8e814cd630f01efa06',
// }

// // getBalance from local-net
// const currentBalance = async (holder) => {
//     await web3.eth.getBalance(holder.address)
//     .then((wei) => {
//         balance = web3.utils.fromWei(wei, 'ether')
//     })
//     .then(() => {
//         console.log(holder.name, 'balance is: ', balance);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// const payment = async(holder, amount) => {

//     // smart contract data
//     const data = ''

//     await web3.eth.getTransactionCount(holder.address)
//         .then((txCount) => {
//             console.log(txCount);
//             // build the transaction
//             const txObject = {
//                 nonce: web3.utils.toHex(txCount),
//                 to: holder.address,
//                 value: web3.utils.toHex(web3.utils.toWei(amount)),
//                 gasLimit: web3.utils.toHex(2100),
//                 gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//                 data: data
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         })

//     // sign the transaction
//     const tx = new Tx(txObject)
//     tx.sign(Buffer.from(holder.privateKey, 'hex'))

//     const serializeTransaction = tx.serialize()
//     const row = '0x' + serializeTransaction.toString('hex')

//     // broadcast the trasaction
//     await web3.sendSignedTransaction(row)
//         .then((txHash) => {
//             console.log('txHash:',txHash);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// currentBalance(Alice)
// payment(Alice, 1)

// TODO: -------------------------------------------------------------------------------------------
// import
const Web3 = require('web3')

// connect with ganache locally
const web3 = new Web3('https://mainnet.infura.io/v3/4524ab38c02c40dfa9db1755851eb33a')


// fetch the avg gasPrice
web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'));
})

// SHA-3
console.log(web3.utils.sha3('Abhishek Patel'));
console.log(web3.utils.sha3('Abhishek Patel'));
console.log(web3.utils.soliditySha3('Abhishek Patel'));

// random Hex
console.log(web3.utils.randomHex(16));

// underscore.js for clean-code
const _ = web3.utils._
// console.log(_);

_.each({ key1: 'value1', key2: 'value2' }, (key, value) => {
    console.log(key, value);
})
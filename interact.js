// interact.js

const Web3 = require('web3');
const ExampleContractArtifact = require('./build/contracts/ExampleContract.json');

const web3 = new Web3('http://127.0.0.1:8545'); // Update with your network configuration if necessary
const ExampleContract = require('@truffle/contract');
ExampleContract.setProvider(web3.currentProvider);

async function interact() {
  const accounts = await web3.eth.getAccounts();
  const instance = await ExampleContract.at(ExampleContractArtifact.networks['5777'].address); // Update with your contract address

  // Interact with the contract here
  await instance.increment(5, { from: accounts[0] });
  let count = await instance.getCount();
  console.log('Count after increment:', count.toString());

  await instance.decrement(3, { from: accounts[0] });
  count = await instance.getCount();
  console.log('Count after decrement:', count.toString());
}

interact();

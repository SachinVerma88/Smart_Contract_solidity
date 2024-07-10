// migrations/2_deploy_contracts.js

const ExampleContract = artifacts.require("ExampleContract");

module.exports = function(deployer) {
  deployer.deploy(ExampleContract);
};

var Election = artifacts.require("./Election.sol");
// represents the contract abs that is specific to truffle, represent our smart contract 

module.exports = function(deployer) {
  deployer.deploy(Election);
};

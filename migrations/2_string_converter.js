const StringConverter = artifacts.require("./StringConverter.sol");

module.exports = function(deployer) {
  deployer.deploy(StringConverter);
};
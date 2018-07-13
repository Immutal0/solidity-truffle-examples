const StringConverter = artifacts.require("./12_string_converter/StringConverter.sol");

module.exports = function(deployer) {
  deployer.deploy(StringConverter);
};
const Adoption = artifacts.require("./27_dapp_pet_shop/Adoption.sol");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
};

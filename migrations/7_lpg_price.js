const LpgPrice = artifacts.require("./20_lpg_price/LpgPrice.sol");

module.exports = function(deployer) {
  deployer.deploy(LpgPrice);
};
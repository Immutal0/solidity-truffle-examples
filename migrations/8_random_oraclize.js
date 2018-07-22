const RandomOraclize = artifacts.require("./21_rng_oraclize/RandomOraclize.sol");

module.exports = function(deployer) {
  deployer.deploy(RandomOraclize);
};
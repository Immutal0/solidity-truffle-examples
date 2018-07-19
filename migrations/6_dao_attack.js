const Attacker = artifacts.require("./18_dao_attack/Attacker.sol");

module.exports = function(deployer) {
  deployer.deploy(Attacker);
};
const Election = artifacts.require("./25_election/Election.sol");

let partyNames = ["Party01", "Party02"];

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    Election,
    partyNames,
    [accounts[0], accounts[1], accounts[1]]
  );
};
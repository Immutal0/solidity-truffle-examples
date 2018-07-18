const Roles = artifacts.require("./17_roles_management/Roles.sol");

module.exports = function(deployer) {
  deployer.deploy(Roles);
};
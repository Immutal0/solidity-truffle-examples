const Roles = artifacts.require("./18_roles_management/Roles.sol");

module.exports = function(deployer) {
  deployer.deploy(Roles);
};
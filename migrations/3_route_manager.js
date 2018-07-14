const RouteManager = artifacts.require("./13_router_manager/RouteManager.sol");

module.exports = function(deployer) {
  deployer.deploy(RouteManager);
};
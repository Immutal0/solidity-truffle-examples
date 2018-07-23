const Attacker = artifacts.require("./19_dao_attack/Attacker.sol");
const MiniDAO = artifacts.require("./19_dao_attack/MiniDAO.sol");

// module.exports = function(deployer) {
//   deployer.deploy(Attacker);
// };

module.exports = function(deployer, network, accounts) {
  
  return deployer.then(() => {
    return deployer.deploy(MiniDAO); 
  }).then(() => {
    return deployer.deploy(
      Attacker,
      MiniDAO.address
    );
    }
  )
};
const BuseoCoin = artifacts.require("./17_crowdsale/BuseoCoin.sol");
const BuseoCrowdsale = artifacts.require("./17_crowdsale/BuseoCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
  const closingTime = openingTime + 86400 * 30; // 30 days
  const rate = new web3.BigNumber(2000);
  const wallet = accounts[1];

  return deployer.then(() => {
    return deployer.deploy(BuseoCoin); 
  }).then(() => {
    return deployer.deploy(
      BuseoCrowdsale,
      openingTime,
      closingTime,
      rate,
      wallet,
      BuseoCoin.address
    );
    }
  )
};
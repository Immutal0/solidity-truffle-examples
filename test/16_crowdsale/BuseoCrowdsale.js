// TODO: finish it
import ether from '../helpers/ether';
import { advanceBlock } from '../helpers/advanceToBlock';
import { increaseTimeTo, duration } from '../helpers/increaseTime';
import latestTime from '../helpers/latestTime';
import EVMRevert from '../helpers/EVMRevert';

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const BuseoCrowdsale = artifacts.require("BuseoCrowdsale");
const BuseoCoin = artifacts.require("BuseoCoin");

// function ether (n) {
//     return new web3.BigNumber(web3.toWei(n, 'ether'));
//   }
  
contract('Crowdsale', (accounts) => {
    const RATE = new BigNumber(10);
    const CAP = ether(20);

    let openingTime;
    let closingTime;
    let buseoCoin;
    let crowdsale;

    beforeEach(async function () {
        openingTime = latestTime() + duration.weeks(1);
        closingTime = openingTime + duration.weeks(1);
        console.log("PARAMS", openingTime, closingTime, 0.001, accounts[0]);
        crowdsale = await BuseoCrowdsale.new(openingTime, closingTime, RATE, accounts[0], BuseoCoin);
    });
    
    it('should accept payments during the sale', async function () {
        const investmentAmount = ether(1);
        const expectedTokenAmount = RATE.mul(investmentAmount);
    
        await increaseTimeTo(this.startTime);
        await this.crowdsale.buyTokens(investor, { value: investmentAmount, from: investor }).should.be.fulfilled;
    
        (await this.token.balanceOf(investor)).should.be.bignumber.equal(expectedTokenAmount);
        (await this.token.totalSupply()).should.be.bignumber.equal(expectedTokenAmount);
      });
});

    
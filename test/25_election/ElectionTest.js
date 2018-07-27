const Election =  artifacts.require("./Election.sol");

contract('Election', function(accounts) {
    let ElectionInst;
    let chairperson = accounts[0];
    let partyAddrs = [accounts[1], accounts[2], accounts[3]];
    let partyNames = ["Party01", "Party02"];
    // let partyNames = [
    //   0x7369656d6b610000000000000000000000000000000000000000000000000000, 
    //   0x7369656d6b610000000000000000000000000000000000000000000000000000
    // ];

    let voterAddrs = [
        accounts[1],
        accounts[2],
        accounts[3], 
        accounts[4], 
        accounts[5], 
        accounts[6], 
        accounts[7],
        accounts[8]
    ];
  
    beforeEach('getting instance before all Test Cases', async function(){
        console.log("party names: ", partyNames);
        console.log("party addresses: ", partyAddrs);
        ElectionInst = await Election.new(partyNames, partyAddrs);
    })

    describe('Deploying contract', function () {
        it('should test that the smart contract is deployed', async function () {
            assert.equal(web3.isAddress(ElectionInst.address), true);
        })
    })

    describe('constructor', function(){
        it('sets chairperson', async function(){
            assert.equal(
                await ElectionInst.chairperson(), 
                chairperson, 
                'Test Failed. chairman is not assigned.'
            );
        });
    })

    describe('giveRightToVote', function(){
        it('makes sure that only chairperson can add voters', async function(){
            try {
                //adding party from some other account
                console.log("Voter:", partyAddrs[2]);
                await ElectionInst.giveRightToVote(accounts[2], { from: accounts[1] });
                assert.fail();
            } catch(err) {
                console.log("HERE COMES THE ERROR:", err.toString());
                assert.ok(/revert/.test(err.message));
            }
        })    
    });

    describe('vote',function(){
        // it('vote count should increase', async function(){
        //     let prevVoteCnt = await ElectionInst.getVoteCount(0);
        //     console.log('prev voter cnt = ' + prevVoteCnt);
        //     await ElectionInst.vote(0, {from : voterAddrs[0]})
        //     // await ElectionInst.vote(accounts[2], {from : voterAddrs[1]})
        //     // await ElectionInst.vote(accounts[0], {from : voterAddrs[2]})
        //     let aftVoteCnt = await ElectionInst.getVoteCount(0);
        //     console.log('after voter cnt = ' + aftVoteCnt);
        //     assert.equal(1, aftVoteCnt, "Should be equal");
        // })

        it('should fail since voter 0 already voted', async function(){
            try {
                await ElectionInst.vote(partyAddrs[0], {from : voterAddrs[0]})
                assert.fail();
            } catch(err){
                assert.ok(/revert/.test(err.message));
            }
        })
    })
});


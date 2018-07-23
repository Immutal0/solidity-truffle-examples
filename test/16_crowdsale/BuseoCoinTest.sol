pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "../../contracts/15_crowdsale/BuseoCoin.sol";

contract BuseoCoinTest {
    BuseoCoin private buseoCoin;
    address private owner;

    constructor() public {
        owner = msg.sender;
    }

    function beforeEach() public {
        buseoCoin = new BuseoCoin();
    }

    function testConstructor() public {
        uint allocatedTokens = buseoCoin.balanceOf(this);
        Assert.equal(allocatedTokens, 1000, "Contract creator should have 1000 tokens");
    }
}
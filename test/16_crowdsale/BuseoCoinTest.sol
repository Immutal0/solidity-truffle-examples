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
        uint initialTokens = buseoCoin.balanceOf(this);
        Assert.equal(initialTokens, 0, "Contract creator should have 0 tokens");
    }

    function testName() public {
        Assert.equal(buseoCoin.name(), "Buseo Coin", "Wrong token name");
    }

    function testSymbol() public {
        Assert.equal(buseoCoin.symbol(), "BUSC", "Wrong token symbol");
    }
}
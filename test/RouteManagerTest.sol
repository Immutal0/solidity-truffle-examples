pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/13_route_manager/RouteManager.sol";

contract RouteManagerTest {
    RouteManager instance;
    
    function testStringToBytes32() public {
        instance = new RouteManager();
        
        Assert.equal(
            instance.stringToBytes32("Sample string"), 
            0x53616d706c6520737472696e6700000000000000000000000000000000000000, 
            "missing byte32 result"
        );    
    }
}
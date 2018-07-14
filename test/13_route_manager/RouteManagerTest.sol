pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/13_route_manager/RouteManager.sol";
// import "../contracts/13_router_manager/StringConverter.sol";

contract RouteManagerTest {
    // using StringConverter for string;

    RouteManager instance;
    
    function beforeEach() public {
        instance = new RouteManager();
    } 
  
    function testSetOwner() public {
        Assert.equal(instance.owner(), address(this), "missing owner address");
    }

    function testAddStop() public {
        Assert.equal(instance.addStop("PL1","Cieszyn", "49.7629645", "18.6279841"), true, "must be true");
        // Assert.equal(instance.stops[0], 1, "Can not add new stop");
    }
    // function testStringToBytes32() public {
        // instance = new RouteManager();
        // string x = "Sample string";
        // bytes32 xBytes = x.stringToBytes32();

        // Assert.equal(
            // x.stringToBytes32(), 
            // 0x53616d706c6520737472696e6700000000000000000000000000000000000000, 
            // "missing byte32 result"
        // );    
    // }
}
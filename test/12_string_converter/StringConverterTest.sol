pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/12_string_converter/StringConverter.sol";

contract StringConverterTest {
    StringConverter instance;
    
    function testStringToBytes32() public {
        instance = new StringConverter();
        
        Assert.equal(
            instance.stringToBytes32("Sample string"), 
            0x53616d706c6520737472696e6700000000000000000000000000000000000000, 
            "missing byte32 result"
        );    
    }
}
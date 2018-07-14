pragma solidity ^0.4.24;

/**
 * @title StringConverter
 * @dev String convertions to multiple types
 */
library StringConverter {

    /**
     * @dev Returns bytes32 representation of a given string
     */
    function strToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
    
        assembly {
            result := mload(add(source, 32))
        }
    }
}
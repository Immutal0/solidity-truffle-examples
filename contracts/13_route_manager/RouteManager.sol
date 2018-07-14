pragma solidity ^0.4.24;

contract RouteManager {
    address public owner;   

    struct Stop {
        bytes4 id;
        bytes32 name;
        bytes10 latitude;
        bytes10 longitude;    
    }

    Stop[] public stops;
 
    constructor() public {
        owner = msg.sender;
    }

    function addStop(
        bytes4 _id,
        bytes32 _name, 
        bytes10 _latitude, 
        bytes10 _longitude
    ) public {
        stops.push(Stop(_id, _name, _latitude, _longitude));    
    }    
}
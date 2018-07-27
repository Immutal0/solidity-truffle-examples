pragma solidity ^0.4.24;

import "../utils/usingOraclize.sol";

contract SwarmOraclize is usingOraclize {
    string public fileContent;

    event newOraclizeQuery(string description);
    event newSwarmContent(string swarmContent);

    constructor() public payable {
        update();
    }

    function __callback(string result) public {
        require(msg.sender == oraclize_cbAddress());
        emit newSwarmContent(result);
        fileContent = result; 
    }

    function update() public payable {
        emit newOraclizeQuery("Oraclize query was sent, standing by for the answer..");
        oraclize_query("swarm", "a930ae3ef0b61b7d1301d523b174e242be137945107a99874edee0c253fe2ca0");
    }
}
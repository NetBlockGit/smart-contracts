pragma solidity ^0.8.0;

contract Blocklist{
    string[] public hostlist;

    function addHostName(string memory newValue) public {
        hostlist.push(newValue);
    }
}
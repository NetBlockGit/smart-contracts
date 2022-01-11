pragma solidity ^0.8.0;

contract Blocklist  {
    uint256 public blockcount = 0;
    mapping(uint256 => string) public blocklist;

    function addHostName(string memory _hostName) 

        public 
    {
  
        blocklist[blockcount]= (_hostName);
        incrementCount();
        
    }

    function incrementCount() internal{
        blockcount ++;
    }
}
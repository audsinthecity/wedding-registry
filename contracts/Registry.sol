pragma solidity ^0.5.0;

/*
  The Registry contract allows wedding guests to claim which gifts they want to buy off of a wedding registry
*/

/*
  Import Open Zeppelin Pausable contract, to have an emergency switch for freezing in the event of a large bug, and make Registry contract Pausable
*/

import "../node_modules/@openzeppelin/contracts/lifecycle/Pausable.sol";

contract Registry is Pausable {
  address payable owner; // public owner variable, set it to the creator of the contract when it is initialized
  address[16] public guests; // variable to keep track of the guests

  /*
    Add event logs
  */
  event LogItemClaimed(address guest, uint itemId);

  /* 
    Create a modifier that throws an error if the msg.sender is not the owner.
  */
  modifier onlyOwner {require(msg.sender == owner); _;}

  constructor() public {
    owner = msg.sender;
  }

  //Claiming a registry item
  function claim(uint itemId) public returns (uint) {
      require(itemId >= 0 && itemId <= 15); // require statement first
      guests[itemId] = msg.sender;
      emit LogItemClaimed(msg.sender, itemId);
      return itemId;
  }

  //Retrieving the guests
  function getGuests() public view returns (address[16] memory) {
      return guests;
  }
}

pragma solidity ^0.5.0;

contract Registry {
  address[16] public guests;  

  //Claiming a registry item
  function claim(uint itemId) public returns (uint) {
      require(itemId >= 0 && itemId <= 15);

      guests[itemId] = msg.sender;

      return itemId;
  }

  //Retrieving the guests
  function getGuests() public view returns (address[16] memory) {
      return guests;
  }
}

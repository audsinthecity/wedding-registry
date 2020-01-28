pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Registry.sol";

contract TestRegistry {
 // The address of the registry contract to be tested
 Registry registry = Registry(DeployedAddresses.Registry());

 // The id of the item that will be used for testing
 uint expectedItemId = 8;

 //The expected guest claiming this item is this contract
 address expectedGuest = address(this);

 //Testing the claim() function
 function testUserCanClaimItem() public {
     uint returnedId = registry.claim(expectedItemId);

     Assert.equal(returnedId, expectedItemId, "Claiming the expected item should match what is returned.");

 }

 //Testing retrieval of a single item's claiming guest
 function testGetGuestAddressByItemId() public {
     address guest = registry.guests(expectedItemId);

     Assert.equal(guest, expectedGuest, "Guest claiming the expected item should be this contract");
 }

 // Testing retrieval of all guests 
function testGetGuestAddressByItemIdInArray() public {
  // Store guests in memory rather than contract's storage
  address[100] memory guests = registry.getGuests();

  Assert.equal(guests[expectedItemId], expectedGuest, "Guests claiming the expected item should be this contract");
}

}
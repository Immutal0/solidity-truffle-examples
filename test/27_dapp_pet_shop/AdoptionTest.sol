pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "../../contracts/27_dapp_pet_shop/Adoption.sol";

contract AdoptionTest {
    Adoption adoption;

    function beforeEach() public {
        adoption = new Adoption();
    }

    function testAdopt() public {
        Assert.equal(adoption.adopt(5), 5, "It should store pet id");
    }

    function testGetAdopterById() public {
        adoption.adopt(4);
        // adoption.adopters(4) not [4] because we use automatic getter
        Assert.equal(adoption.adopters(4), this, "owner of pet ID 4 should be stored"); 
    }

    function testGetAdopters() public {
        adoption.adopt(1);
        address[16] memory adopters = adoption.getAdopters();
        Assert.equal(adopters[1], this, "it should return the array of addresses");
    }

    function testCancelAdoption() public {
        adoption.adopt(10);
        Assert.equal(adoption.adopters(10), this, "Adopter id must be set");
        adoption.cancelAdoption(10);
        Assert.equal(adoption.adopters(10), 0x0, "Must be empty again");
    }

}
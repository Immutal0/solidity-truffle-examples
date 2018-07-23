# Truffle challenges

These examples are part of my guide [The best way to become Ethereum Developer in 2018](https://medium.com/@pbrudny/the-best-way-to-become-ethereum-solidity-developer-in-2018-5606e54646e6)

and `30/30 challenge` on [polish ethereum programming](https://www.facebook.com/groups/531936723867447/?ref=bookmarks) FB group (members write one contract a day to improve Solidity skills).

First 11 Solidity challenges without Truffle are [here](https://github.com/pbrudny/learning-solidity-2018)

Try to write a contract yourself before checking the code in the repo!

## Challenges

### 12_string_converter
* create function to convert string to bytes32
* add Solidity test for that function

### 13_route_manager
* contract must store a list of bus stops
* each bus stop has id, name and coordinates (i.e czn1, PKS Cieszyn, 10.123222, 33.212345)
* owner should be able to add new stops
* contract must have test coverage

### 14_testing_route_manager
* add Solidity tests
* add JavaScript tests

### 15_crowdsale
* create mintable coin (use Open Zeppelin)
* create simple crowdsale (use Open Zeppelin)
* set opening and closing time
* set rate and wallet address 

### 16_testing_crowdsale
* add Solidity tests
* add JavaScript tests

### 17_roles_management
* create contract which inherites from Ownable (Open Zeppelin)
* contract must have a list of managers
* owner can add/update/remove manager
* owner is a manager too
* add modifier onlyManager

### 18_testing_roles_management
* add Solidity tests
* add JavaScript tests

### 19_the_dao_attack
* add very simplified The DAO contract (deposit, withdraw)
* add attacker contract

### 20_lpg_price
* get LPG price using Oraclize API

### 21_random_oraclize
* get random number using Oraclize API

## Like it?
If you like it please share it with others :)


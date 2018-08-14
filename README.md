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

### 14_route_manager_test
* add Solidity tests
* add JavaScript tests

### 15_shared_wallet
* contract has one owner
* owner can add and remove managers
* manager can withdraw all the funds
* contract has a payable fallback function to receive transfers

### 16_multisig_wallet
* create a multi signature wallet
* transfers can only be done when 3 managers sign the transaction 

### 17_crowdsale
* create mintable coin (use Open Zeppelin)
* create simple crowdsale (use Open Zeppelin)
* set opening and closing time
* set rate and wallet address

### 18_roles_management
* create contract which inherites from Ownable (Open Zeppelin)
* contract must have a list of managers
* owner can add/update/remove manager
* owner is a manager too
* add modifier onlyManager

### 19_the_dao_attack
* add very simplified The DAO contract (deposit, withdraw)
* add attacker contract

### 20_lpg_price
* get LPG price using Oraclize API

### 21_random_oraclize
* get random number using Oraclize API

### 22_raffle_oraclize
* users can join raffle once
* owner can't participate
* winner is picked using RNG from Oraclize

### 23_ipfs_oraclize
* add a simple json file to ipfs
* use oraclize to read that file
* store the result of one json attribute in a string variable

### 24_election
* create one contract per election, providing a short name and address for each candidate. 
* creator of the contract gives the right to vote to each address individually
* each voter can vote once
* voter can not vote on himself

### 25_faucet
* add fallback to accept the payment
* add withdraw method which allows anyone to get maximum 1 ether
* log both amounts (paid, transferred) using events

### 26_swarm_oraclize
* add text file to Swarm public gateway (https://swarm-gateways.net)
* read that file in the contract through Oraclize API

### 27_dapp_pet_shop
* build dapp based on https://truffleframework.com/tutorials/pet-shop
* allow owner to cancel adoption
* write a test for cancelling adoption (TDD)
* add cancelling function to the smart contract

### 28_infura_deployment
* add settings for ropsten deployment using infura

### 29_tic_tac_toe
* add basic tic tac toe for 2 players
* 3x3 board
* no AI

## Other challenges
* [Plain Solidity: 1-12](https://github.com/pbrudny/learning-solidity-2018)
* [Web3 deploy challenge: 30](https://github.com/pbrudny/web3-deploy-example)

## Like it?
If you like it please share it with others :)


# Truffle Examples

This repository contains a series of smart contract challenges designed to help you learn and practice Solidity development using the Truffle framework. Each challenge focuses on different aspects of Ethereum development, including contract creation, testing, and integration with external services like Oraclize and IPFS.

---

### 12 - `string_converter.sol`
- **Objective:** Implement a function that converts a string to `bytes32`.
- **Requirements:** Provide Solidity tests to validate the function.

### 13 - `route_manager.sol`
- **Objective:** Create a contract that stores a list of bus stops, each with an ID, name, and coordinates (e.g., `czn1, PKS Cieszyn, 10.123222, 33.212345`).
- **Requirements:**
  - The contract owner should be able to add new bus stops.
  - Include test coverage for this contract.

### 14 - `route_manager_test.sol`
- **Objective:** Add tests for the `route_manager.sol` contract.
  - Provide both Solidity and JavaScript tests to ensure full coverage.

### 15 - `shared_wallet.sol`
- **Objective:** Develop a shared wallet contract with the following functionality:
  - One owner who can add or remove managers.
  - Managers can withdraw funds from the wallet.
  - Implement a payable fallback function to accept ether transfers.

### 16 - `multisig_wallet.sol`
- **Objective:** Implement a multisignature wallet where transfers can only be executed when at least 3 managers sign the transaction.

### 17 - `crowdsale.sol`
- **Objective:** Create a mintable token and a simple crowdsale contract using OpenZeppelin.
- **Requirements:**
  - Set opening and closing times for the crowdsale.
  - Set the rate and wallet address for the crowdsale.

### 18 - `roles_management.sol`
- **Objective:** Develop a contract that inherits from OpenZeppelin's `Ownable` contract, with the following functionality:
  - A list of managers.
  - The owner can add, update, and remove managers.
  - The owner is considered a manager.
  - Add a modifier to restrict access to managers.

### 19 - `dao_attack.sol`
- **Objective:** Implement a simplified version of The DAO contract with `deposit` and `withdraw` functions.
- **Requirements:** Create an attacker contract to exploit vulnerabilities in The DAO.

### 20 - `lpg_price.sol`
- **Objective:** Use the Oraclize API to fetch the current price of LPG.

### 21 - `random_oraclize.sol`
- **Objective:** Use the Oraclize API to generate a random number.

### 22 - `raffle_oraclize.sol`
- **Objective:** Create a raffle contract where users can enter once.
- **Requirements:**
  - The contract owner cannot participate.
  - The winner is selected using Oraclize’s random number generator (RNG).

### 23 - `ipfs_oraclize.sol`
- **Objective:** Upload a simple JSON file to IPFS.
- **Requirements:** Use Oraclize to read the file and store the result of a specific JSON attribute in a string variable.

### 24 - `election.sol`
- **Objective:** Create a contract for elections, where each contract represents one election and each candidate has a short name and address.
- **Requirements:**
  - The contract creator grants voting rights to individual addresses.
  - Each voter can vote only once and cannot vote for themselves.

### 25 - `faucet.sol`
- **Objective:** Implement a faucet contract with the following features:
  - A fallback function to accept ether payments.
  - A `withdraw` function that allows anyone to withdraw up to 1 ether.
  - Log both the paid and transferred amounts using events.

### 26 - `swarm_oraclize.sol`
- **Objective:** Upload a text file to Swarm’s public gateway (e.g., [swarm-gateways.net](https://swarm-gateways.net)).
- **Requirements:** Use Oraclize to read the file in the contract.

### 27 - `dapp_pet_shop.sol`
- **Objective:** Build a decentralized application (dApp) based on the [Truffle Pet Shop Tutorial](https://truffleframework.com/tutorials/pet-shop).
- **Requirements:**
  - Allow the owner to cancel an adoption.
  - Implement a test for cancelling adoption (TDD).
  - Add the cancelling function to the smart contract.

### 28 - `infura_deployment.sol`
- **Objective:** Add settings for deploying the contract to the Ropsten network using Infura.

### 29 - `tic_tac_toe.sol`
- **Objective:** Implement a basic 2-player Tic-Tac-Toe game contract with a 3x3 board.
- **Requirements:** The game should not have an AI component.

---

## Contribution

If you would like to contribute to this repository, feel free to:

1. Fork the repository.
2. Add a solution for a challenge or propose a new challenge.
3. Submit a pull request (PR) with your changes.
4. Your contributions will be reviewed and merged accordingly.

---

## Like the Project?

If you find this repository helpful, please share it with others who may benefit from it!

---

## Contact

For any questions or feedback, feel free to reach out:

- **Telegram**: [@Immutal0](https://t.me/Immutal0)
- **Twitter**: [@Immutal0_](https://x.com/Immutal0_)

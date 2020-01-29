# Wedding Registry

A simple decentralized application built with Solidity for the Ethereum Blockchain.
It allows guests of a wedding to claim which gifts from the registry they want to buy. This application was created as a final project for the [Consensys Developer Bootcamp](https://consensys.net/academy/bootcamp/) and is comprised of a web app front end and Solidity smart contracts.

## Features
* User can view available items on the registry on a web app
* Users can claim which items they would like to buy from the registry by confirming using their Metamask account

## Demo

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Install [Node.js v8+ LTS and npm](https://nodejs.org/en/) (comes with Node)
* Install [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation) or use the following command to do so
```
npm install -g truffle
```
* Install [Ganache](https://www.trufflesuite.com/ganache), a personal blockchain for Ethereum development you can use to deploy contracts, develop applications, and run tests
* Install [Metamask](www.metamask.io) extension on web browser (Chrome recommended, there are some issues using Brave and Firefox)
* Clone project

The directory structure is similar to any Truffle project, consisting of:
* contracts/: the Solidity source files for our smart contracts
* migrations/: the migration system to handle smart contract deployments
* test/: Solidity and js tests for the smart contracts
* truffle-config.js: Truffle configuration file

### Installing

Clone repository, as noted in the prerequisites.
Start a development blockchain by running
```
ganache-cli
```
from the terminal in the project directory.
While that is running, in a different terminal, compile and migrate by running
```
truffle compile
```
and
```
truffle migrate
```

## Running the tests

You can run the pre-written tests by running
```
truffle test
```

## Using the dapp

Start a local web server to use the dapp. We are using the `lite-server` library to serve our static files.
To start the local web server:
```
npm run dev
```
The page will automatically load in the browser, alternatively you can point your browser to `http://localhost:3000/`.
Metamask will also automatically open and request your login details in order to interact with the dapp.

## Design Patterns and Security
* [Design pattern decisions](https://github.com/audsinthecity/wedding-registry/blob/master/design_pattern_decisions.md)
* [Avoiding common attacks](https://github.com/audsinthecity/wedding-registry/blob/master/avoiding_common_attacks.md)

## Implementing a Library
This project uses Open Zeppelin's [Pausable.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/lifecycle/Pausable.sol) contract

## Testnet Deployment
Contracts were deployed to Rinkeby testnet. Full output can be found [here](https://github.com/audsinthecity/wedding-registry/blob/master/deployed_addresses.txt) and you can search for these on [Rinkeby's Etherscan](https://rinkeby.etherscan.io/address/0xe2e5d223d163baeb75cfa4cdf0ac43bb550d820b)

* Migrations.sol - 0xb4EC2B12aC68F1C51e7C41CA61aC5986C99929FC
* Registry.sol - 0x311Cc23Bf6773a00003B1638fe2C1ee58192F781

## Built With

* [Solidity](https://solidity.readthedocs.io/en/v0.6.1/) - object-oriented, high-level language for implementing smart contracts
* [lite-server](https://www.npmjs.com/package/lite-server) - lightweight development only server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback
page when a route is not found

## Future Work
* I started with a much more complicated dapp idea to help people accomplish their longer term goals by forming
accountability rings. Given the short timeline, I decided to complete a very simple project with all the project
requirements first and then revisit the more complicated dapp.
* You can see the work in progress repo [here](https://github.com/audsinthecity/accountability-rings)
* Extensions for this project could include making it possible to actually "buy" the items from the registry by
sending value with the transaction instead of just claiming them, and enabling payment split functions.

## Authors

* **Audrey Chaing** - *Initial work* - [audsinthecity](https://github.com/audsinthecity)

## License

This project is licensed under the MIT License, a short and simple permissive license with conditions only requiring
preservation of copyright and license notices.

## Acknowledgments

* Thanks to the Consensys Academy mentors; including Coogan Brennan, Luiz Crus, and especially Josh Crites; for being available via Slack/Zoom for questions, putting together the material, and organizing interesting guest lecturers
* Additional thanks to Bootcamp alumni mentors, especially Matias Barrios, for answering questions and providing help on Slack and Zoom
* Nod to [PurpleBooth](https:github.com/PurpleBooth) for the README starting template

const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim(); // 12 word mnemonic for Rinkeby, read from .secret

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // Using ganache as development network
      network_id: "*"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/d508cc015d4a4bf79e51613e99525999");
      },
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};

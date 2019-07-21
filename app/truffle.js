const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "b3db3add784c4c33b7852bc30efe3060";

const mnemonic =
  "sound rubber loyal spin pitch anger rigid amazing milk wisdom often talk"; //"0x5D61dd25FA5cE989907aA2718Bc92b6427116b23"; ;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*" // Any network (default: none)
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000
      //from: "0x5D61dd25FA5cE989907aA2718Bc92b6427116b23"
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24" // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};

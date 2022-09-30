module.exports = {
  plugins: ['solidity-coverage'],
  // contracts_directory: 'src',

  networks: {
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8545, // <-- If you change this, also set the port option in .solcover.js.
      port: 8555, // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01, // <-- Use this low gas price
    },
  },

  mocha: {
    timeout: 100000,
  },

  compilers: {
    solc: {
      version: '0.8.9', // Fetch exact version from solc-bin
    },
  },
};

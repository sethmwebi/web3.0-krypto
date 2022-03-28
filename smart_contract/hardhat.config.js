// https://eth-ropsten.alchemyapi.io/v2/Gf7uCkzSAb8kg9sfZkmbHv-3aZ5nHDLc

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Gf7uCkzSAb8kg9sfZkmbHv-3aZ5nHDLc',
      accounts: ['14485eb9e16b108cd1d9a5ad01559cce525d09b265c8032791c00344ede460cb']
    }
  }
}
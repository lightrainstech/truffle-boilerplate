const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*' // Match any network id
        },
        kovan: {
            provider: () =>
                new HDWalletProvider(
                    process.env.PRIVATE_KEY,
                    `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`
                ),
            network_id: 42,
            skipDryRun: true
        },
        bsc: {
            provider: () =>
                new HDWalletProvider(
                    process.env.PRIVATE_KEY,
                    `https://data-seed-prebsc-1-s1.binance.org:8545`
                ),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    },
    plugins: ['truffle-plugin-verify'],
    api_keys: {
        etherscan: process.env.ETHERSCAN,
        bscscan: process.env.BSCSCAN
    }
}

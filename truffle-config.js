const HDWalletProvider = require('truffle-hdwallet-provider')
const NonceTrackerSubprovider = require('web3-provider-engine/subproviders/nonce-tracker')
const config = require('config')
const TestRPC = require('ganache-cli')

module.exports = {
    networks: {
        development: {
            provider: TestRPC.provider(),
            network_id: '*'
        },
        tomo: {
            provider: function () {
                let w = new HDWalletProvider(config.get('truffle.privateKey'), config.get('blockchain.rpc'))
                let nonceTracker = new NonceTrackerSubprovider()
                w.engine._providers.unshift(nonceTracker)
                nonceTracker.setEngine(w.engine)
                return w
            },
            network_id: config.get('blockchain.networkId'),
            gas: 4000000,
            gasPrice: 10000000000000
        }
    },
	compilers: {
		solc: {
			version: '^0.4.24',
			settings: {
				optimizer: {
					enabled: true
				}
			}
		}
	}
}

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name regret oven proof guess arena army giant'; 
let testAccounts = [
"0xcfb4763e5266e252f91e35b1bd9f6f5cd66361c40ca050e89f0f80de94ae16fa",
"0xb98bb5706880a0e2831c87541f2936319b1b57674273a265d46426e561942c5f",
"0xc2f1cb788ee82efe086a728be8b460f060574bf026fa9e63e52b8fb2b0da9033",
"0x3c8edfe5d80f22caaac11991768494594155896b54d8165d49a8ffc09b951b3d",
"0xcebc40eb6dceb4ef79bcc35b5b895f0c50eac7a6dd9b0fcf19b05f2df7644623",
"0x1ac79de2f131b35d621a391530f1c9b77faddff1e0555777c9460be40af27185",
"0x8c24ae71b5b496f49983fd06b3746812b6990ed337cef717fc02515ca341c8c8",
"0xa0cfc39e9043eb72a449debf4475b751d76aae3418c8f68beaa7e844f56da32e",
"0xda1e059fd4523961cea588f8132a817c5f1f1f831ab5d4fe3e08595021d15212",
"0x0f93646a636288600148740ce8ad27cb27b5b0ecb4371af6760f0c57697db64a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



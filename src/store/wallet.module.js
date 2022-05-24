import { ethers } from "ethers";

export const WALLET_ADDRESS = 'walletAddress';

// Actions
export const CONNECT_WALLET = 'connectWallet';

// Setters
export const SET_WALLET = 'setWallet';
export const SET_PROVIDER = 'setProvider';

// Getters
export const GET_WALLET_SHORT_ADDRESS = 'getWalletShortAddress';
export const GET_ACTIVE = 'getActive';
export const GET_ACCOUNT = 'getAccount';
export const GET_CHAIN_ID = 'getChainId';

const state = {
    wallet: {
        message: '',
        metaMaskAddress: '',
        netID: -1,
        type: '',
        web3: null,
        provider: null,
    }
};

const getters = {
    [GET_ACCOUNT](state) {
        return state.wallet.metaMaskAddress;
    },
    [GET_ACTIVE](state) {
        return (state.web3 !== null);
    },
    [GET_CHAIN_ID](state) {
        return state.wallet.chainID;
    },
    [GET_WALLET_SHORT_ADDRESS](state) {
        const addr = state.wallet.metaMaskAddress;
        if (addr === undefined || addr === '') return '接入钱包';
        return addr.slice(0, 5) + '...' + addr.slice(addr.length - 5, addr.length);
    }
};

const actions = {
    [CONNECT_WALLET](context, wallet) {
        if (wallet.type !== 'NO_LOGIN') {
            localStorage.setItem(WALLET_ADDRESS, wallet.metaMaskAddress);
            context.commit(SET_WALLET, wallet);
            const provider = new ethers.providers.Web3Provider(wallet.web3.givenProvider)
            provider.pollingInterval = 12000
            context.commit(SET_PROVIDER, provider);
        }
        else {
            localStorage.removeItem(WALLET_ADDRESS);
        }
        return wallet;
    }
};

const mutations = {
    [SET_WALLET](state, wallet) {
        state.wallet = wallet
    },
    [SET_PROVIDER](state, provider) {
        state.provider = provider;
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
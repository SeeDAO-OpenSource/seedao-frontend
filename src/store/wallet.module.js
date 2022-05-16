export const WALLET_ADDRESS = 'walletAddress';

// Actions
export const CONNECT_WALLET = 'connectWallet';

// Setters
export const SET_WALLET = 'setWallet';

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
        if(addr === undefined || addr === '') return '接入钱包';
        return addr.slice(0,5) + '...' + addr.slice(addr.length - 5, addr.length);  
    }
};

const actions = {
    [CONNECT_WALLET](context, wallet) {
        if (wallet.type !== 'NO_LOGIN') {
            localStorage.setItem(WALLET_ADDRESS, wallet.metaMaskAddress);
            context.commit(SET_WALLET, wallet);          
        }
        else localStorage.removeItem(WALLET_ADDRESS);
    }
};

const mutations = {
    [SET_WALLET](state, wallet) {
        state.wallet = wallet
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
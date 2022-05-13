import openseaService from '@/services/opensea.service';

// Actions
export const FETCH_SGN_DATA = 'fetchSGNData';

// Setters
export const SET_SGN_DATA = 'setSGNData';

// Getters
export const GET_SGN_DATA = 'getSGNData';

const COLLECTION_SGN = 'seedaogenesis';

const state = {
    sgnData: null,
};

const getters = {
    [GET_SGN_DATA](state) {
        return state.sgnData;
    },
};

const actions = {
    [FETCH_SGN_DATA](context) {
        return new Promise((resolve) => {
            openseaService.get(COLLECTION_SGN).then((data) => {
                context.commit(SET_SGN_DATA, data);
                resolve(data);
            })     
        });
    },
};

const mutations = {
    [SET_SGN_DATA](state, sgnData) {
        state.sgnData = sgnData
    },
    
};

export default {
    state,
    actions,
    mutations,
    getters,
};
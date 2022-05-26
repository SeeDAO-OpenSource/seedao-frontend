import PoapService from '@/services/poap.service';

// Actions
export const ISSUE_POAP_TESTNET = 'issuePoapTestnet';
export const ISSUE_POAP = 'issuePoap';

// Setters
export const SET_ISSUE_RESULTS = 'setIssueResults';

// Getters
export const GET_ISSUE_RESULTS = 'getIssueResults';


const state = {
    results: {},
};

const getters = {
    [GET_ISSUE_RESULTS](state) {
        return state.results;
    },
};

const mutations = {
    [SET_ISSUE_RESULTS](state, results) {
        state.results = results;
    },
};

const actions = {
    [ISSUE_POAP_TESTNET](context, params) {
        return new Promise((resolve) => {
            PoapService.post('testnet/issue', params).then((results) => {
                context.commit(SET_ISSUE_RESULTS, results);
                resolve(results);
            }).catch((error) => console.error(error))
        });
    },
    [ISSUE_POAP](context, params) {
        return new Promise((resolve) => {
            PoapService.post('issue', params).then((results) => {
                context.commit(SET_ISSUE_RESULTS, results);
                resolve(results);
            }).catch((error) => console.error(error))
        });
    }
};

export default {
    state,
    actions,
    mutations,
    getters,
};
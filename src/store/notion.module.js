import NotionService from '@/services/notion.service';
import notionDB from '@/data/notiondb';

// Actions
export const FETCH_NOTION_DATA = 'fetchNotionData';

// Setters
export const SET_NOTION_DATA = 'setNotionData';

// Getters
export const GET_NOTION_DATA = 'getNotionData';

const state = {
    notionData: null,
};

const getters = {
    [GET_NOTION_DATA](state) {
        return state.notionData;
    },
};

const actions = {
    [FETCH_NOTION_DATA](context, name) {
        return new Promise((resolve) => {
            const params = { databaseId: notionDB[name] };
            NotionService.post(params).then((data) => {
                context.commit(SET_NOTION_DATA, data);
                resolve(data);
            })     
        });
    }
};

const mutations = {
    [SET_NOTION_DATA](state, notionData) {
        state.notionData = notionData
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
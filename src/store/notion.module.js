import NotionService from '@/services/notion.service';
import notionDB from '@/data/notiondb';

const DB_NAME_BOUNTY = 'bounty';
const DB_TITLE_TASK = '任务';
const DB_TITLE_MEMBER = '成员';
const DB_TITLE_RECRUIT = '招募';
const DB_TITLE_REWARD = '激励';

// Actions
export const FETCH_NOTION_DATA = 'fetchNotionData';
export const FETCH_BOUNTY_DATA = 'fetchBountyData';

// Setters
export const SET_NOTION_DATA = 'setNotionData';
export const SET_BOUNTY_DATA = 'setBountyData';

// Getters
export const GET_NOTION_DATA = 'getNotionData';
export const GET_BOUNTY_DATA = 'getBountyData';


const state = {
    notionData: null,
    bountyData: [],
};

const getters = {
    [GET_NOTION_DATA](state) {
        return state.notionData;
    },
    [GET_BOUNTY_DATA](state) {
        return state.bountyData;
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
    },
    [FETCH_BOUNTY_DATA](context) {
        return new Promise((resolve) => {
            const params = { databaseId: notionDB[DB_NAME_BOUNTY] };
            NotionService.post(params).then(({ data }) => {
                context.commit(SET_BOUNTY_DATA, data.data.results);
                resolve(data.data);
            })     
        });
    }
};

const mutations = {
    [SET_NOTION_DATA](state, notionData) {
        state.notionData = notionData
    },
    [SET_BOUNTY_DATA](state, results) {
        state.bountyData = [];
        results.forEach((result)=>{
            state.bountyData.push({
                task: result.properties[DB_TITLE_TASK].title[0].plain_text,
                member: result.properties[DB_TITLE_MEMBER].rich_text[0].plain_text.replace('@',''),
                recruit: result.properties[DB_TITLE_RECRUIT].rich_text[0].plain_text,
                reward: result.properties[DB_TITLE_REWARD].rich_text[0].plain_text
            })
        })
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
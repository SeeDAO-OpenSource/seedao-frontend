import DiscordBotService from '@/services/discordbot.service.js';

// Actions
export const FETCH_HIGHLIGHTS = 'fetchHighlights';

// Setters
export const SET_HIGHLIGHTS = 'setHighlights';

// Getters
export const GET_HIGHLIGHTS = 'getHighlights';

const state = {
    highlights: [],
};

const getters = {
    [GET_HIGHLIGHTS](state) {
        return state.highlights;
    },
};

const actions = {
    [FETCH_HIGHLIGHTS](context) {
        return new Promise((resolve) => {
            DiscordBotService.get().then((res) => {
                let highlightComments = [];
                const { result, highlights } = res.data;
                if (result === 1) {
                    let id_set = new Set();
                    highlights.forEach((c) => {
                        if (!id_set.has(c.id)) {
                            id_set.add(c.id);
                            highlightComments.push(c);
                        }
                    });
                    context.commit(SET_HIGHLIGHTS, highlightComments);
                }
                resolve(highlightComments);
            })
        });
    }
};

const mutations = {
    [SET_HIGHLIGHTS](state, highlights) {
        state.highlights = highlights
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
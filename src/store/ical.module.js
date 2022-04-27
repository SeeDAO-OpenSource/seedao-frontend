import IcalService from '@/services/ical.service';

// Actions
export const FETCH_EVENTS = 'fetchEvents';

// Setters
export const SET_EVENTS = 'setEvents';
export const SET_DAILY_EVENTS = 'setDailyEvents';

// Getters
export const GET_EVENTS = 'getEvents';
export const GET_DAILY_EVENTS = 'getDailyEvents';

const state = {
    events: [],
    dailyEvents: []
};

const getters = {
    [GET_EVENTS](state) {
        return state.events;
    },
    [GET_DAILY_EVENTS](state) {
        return state.dailyEvents;
    }
};

const actions = {
    [FETCH_EVENTS](context) {
        return new Promise((resolve) => {
            IcalService.post().then(({ data }) => {
                const index = Object.keys(data.data);
                let events = [];
                let datestr = '';
                let daytime = 0;
                let dailyEvents = [];
                let dayEvents = [];
                index.forEach((fyi) => {
                    const content = data.data[fyi];
                    if (content.summary !== undefined) {
                        const start = new Date(content.start);
                        const thisday = start.getFullYear() + "/"
                            + (start.getMonth() + 1) + "/"
                            + start.getDate() + " ";
                        const event = {
                            summary: content.summary,
                            start: new Date(content.start),
                            end: new Date(content.end),
                            description: content.description !== undefined ? content.description : ''
                        };
                        if (thisday !== datestr) {
                            if (datestr !== '') {
                                dailyEvents.unshift({
                                    date: daytime,
                                    events: dayEvents
                                });
                                dayEvents = [];
                            }
                            dayEvents.unshift(event);
                            daytime = start;
                            datestr = thisday;
                        }
                        else {
                            dayEvents.unshift(event);

                        }
                        events.unshift(event);
                    }
                })
                dailyEvents.unshift({
                    date: daytime,
                    events: dayEvents
                });
                context.commit(SET_DAILY_EVENTS, dailyEvents);
                context.commit(SET_EVENTS, events);
                resolve(events);
            })
        });
    }
};

const mutations = {
    [SET_EVENTS](state, events) {
        state.events = events
    },
    [SET_DAILY_EVENTS](state, dailyEvents) {
        state.dailyEvents = dailyEvents
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
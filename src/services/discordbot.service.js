require('dotenv').config();

import { inject } from 'vue';
import config from '@/data/config';

export default {

    init() {
        const axios = inject('axios');
        if (axios !== undefined) {
            if(process.env.NODE_ENV === 'production')
            {
                axios.defaults.baseURL = `${config.BACKEND_BOT_SERVER_URL}`;
            }
            else axios.defaults.baseURL = `${config.BACKEND_BOT_SERVER_URL}`;
        }
        return axios;
    },

    get(params) {
        return new Promise((resolve) => {
            const axios = this.init();
            axios.get('/discordBotApi/highlights', params).then(res => resolve(res)).catch((error) => resolve(error));
        });
    },

};
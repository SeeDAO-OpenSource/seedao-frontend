require('dotenv').config();

import { inject } from 'vue'; 

export default {

    init() {
        const axios = inject('axios');
        if (axios !== undefined) {
            if(process.env.NODE_ENV === 'production')
            {
                axios.defaults.baseURL = "/discordBotApi/";
            }
            else axios.defaults.baseURL = "http://8.210.30.59/";
        }
        
        return axios;
    },

    get(params) {
        return new Promise((resolve) => {
            const axios = this.init();
            axios.get('highlights', params).then(res => resolve(res)).catch((error) => resolve(error));
        });
    },

};
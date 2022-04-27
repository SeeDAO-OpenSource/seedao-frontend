require('dotenv').config();

import config from '@/data/config';

export default {

    init() {
        const axios = require('axios');
        if (axios !== undefined) {
            if(process.env.NODE_ENV === 'production')
            {
                axios.defaults.baseURL = `${config.BACKEND_SERVER_URL}/${config.BACKEND_API_ENDPOINT}`;
            }
            else axios.defaults.baseURL = `${config.BACKEND_LOCAL_URL}/${config.BACKEND_API_ENDPOINT}`;
        }
        return axios;
    },

    post(params) {
        return new Promise((resolve) => {
            const axios = this.init();
            axios.post('notion', params).then(res => resolve(res)).catch((error) => resolve(error));
        });
    },

};
require('dotenv').config();

import config from '@/data/config';

export default {

    init() {
        const axios = require('axios');
        if (axios !== undefined) {
            axios.defaults.baseURL = config.OPENSEA_COLLECTION_URL;
        }
        return axios;
    },

    get(collectionName) {
        return new Promise((resolve) => {
            const axios = this.init();
            axios.get(collectionName).then(res => resolve(res)).catch((error) => resolve(error));
        });
    },

};
import Vuex from 'vuex'

import wallet from './wallet.module';
import notion from './notion.module';
import ical from './ical.module';
import opensea from './opensea.module';
import discordbot from './discordbot.module';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  modules: {
    wallet,
    notion,
    ical,
    opensea,
    discordbot
  }
})
import Vue from 'vue'
import Vuex from 'vuex'

import coronaVirus from './modules/coronaVirusStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    coronaVirus,
  },
})

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import common from "./common.js";

import settings from './modules/settings'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    app,
    settings,
    user,
    tagsView,
    permission
  },
  getters
})

export default store

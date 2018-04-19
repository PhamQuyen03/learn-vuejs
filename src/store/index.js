import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import staticData from './modules/staticData/index'
import auth from './modules/auth/index'
import errors from './modules/errors/index'

// import * as actions from './actions'
// import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    reducer: state => ({
      auth: state.auth
    })
  })],
  state: {
    router: null,
    alert: {
      type: 'error',
      title: 'success alert',
      isShow: false
    }
  },
  modules: {
    auth,
    errors,
    staticData
  },
  mutations: {
  }
})

export default store

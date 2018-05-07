import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import staticData from './modules/staticData/index'
import auth from './modules/auth/index'
import errors from './modules/errors/index'
import schedules from './modules/schedules'
import { AUTH } from './constantTypes'
const { LOG_OUT_SUCCESS } = AUTH

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    reducer: state => ({
      auth: state.auth
    })
  })],
  state: {
    router: null,
    auth: {
      isLogIn: false,
      authToken: '',
      userData: {
        name: '',
        email: '',
        avatar: null,
        gender: null,
        id: null
      }
    }
  },
  modules: {
    auth,
    errors,
    staticData,
    schedules
  },
  actions: {
    initApp ({ commit, state }) {
      return state
    }
  },
  mutations: {
    [LOG_OUT_SUCCESS] (state, payload) {
      state.auth = {
        isLogIn: false,
        authToken: '',
        userData: {}
      }
    }
  }
})

export default store

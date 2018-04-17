
import * as actions from './actions'
import { AUTH } from '../../constantTypes'
const {
  LOG_IN_DONE, LOG_IN_SUCCESS, LOG_IN_ERROR,
  SIGN_UP_DONE, SIGN_UP_SUCCESS, SIGN_UP_ERROR,
  LOG_OUT_DONE, LOG_OUT_SUCCESS, LOG_OUT_ERROR
} = AUTH
export default {
  actions,
  state: {
    isLogIn: false,
    authToken: '',
    userData: null
  },
  mutations: {
    [LOG_IN_SUCCESS] (state, payload) {
      console.log('payload login success', payload)
    },
    [LOG_IN_DONE] (state, payload) {
      console.log('payload login done', payload)
    },
    [LOG_IN_ERROR] (state, payload) {
      console.log('payload login error', payload)
    },
    [SIGN_UP_SUCCESS] (state, payload) {
      console.log('payload login success', payload)
    },
    [SIGN_UP_DONE] (state, payload) {
      console.log('payload login done', payload)
    },
    [SIGN_UP_ERROR] (state, payload) {
      console.log('payload login error', payload)
    },
    [LOG_OUT_SUCCESS] (state, payload) {
      console.log('payload login success', payload)
    },
    [LOG_OUT_DONE] (state, payload) {
      console.log('payload login done', payload)
    },
    [LOG_OUT_ERROR] (state, payload) {
      console.log('payload login error', payload)
    }
  }
}

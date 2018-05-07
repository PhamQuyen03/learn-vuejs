
import * as actions from './actions'
import { AUTH } from '../../constantTypes'
const {
  LOG_IN_DONE, LOG_IN_SUCCESS, LOG_IN_ERROR,
  SIGN_UP_DONE, SIGN_UP_SUCCESS, SIGN_UP_ERROR,
  LOG_OUT_DONE, LOG_OUT_ERROR
} = AUTH
export default {
  actions,
  mutations: {
    [LOG_IN_SUCCESS] (state, payload) {
      const { data: { success, result } } = payload
      state.isLogIn = success
      state.authToken = result.authToken
      state.userData = result
    },
    [LOG_IN_DONE] (state, payload) {
    },
    [LOG_IN_ERROR] (state, payload) {
    },
    [SIGN_UP_SUCCESS] (state, payload) {
    },
    [SIGN_UP_DONE] (state, payload) {
    },
    [SIGN_UP_ERROR] (state, payload) {
    },
    [LOG_OUT_DONE] (state, payload) {
    },
    [LOG_OUT_ERROR] (state, payload) {
    }
  }
}

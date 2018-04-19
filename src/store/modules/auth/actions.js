import { AUTH } from '../../constantTypes'
import * as auth from '../../../api/auth'

const {
  LOG_IN, LOG_IN_DONE, LOG_IN_SUCCESS, LOG_IN_ERROR,
  SIGN_UP, SIGN_UP_DONE, SIGN_UP_SUCCESS, SIGN_UP_ERROR,
  LOG_OUT, LOG_OUT_DONE, LOG_OUT_SUCCESS, LOG_OUT_ERROR
} = AUTH
// login
export const logIn = ({ dispatch }, data) => {
  console.log('data', data)
  auth.logIn({ type: LOG_IN, dispatch, data })
}
export const logInSuccess = ({ commit }, payload) => {
  console.log('payload', payload)
  commit(LOG_IN_SUCCESS, payload)
}

export const logInError = ({ commit }) => {
  const payload = {
    status: false,
    info: 'logIn faile!!'
  }
  commit(LOG_IN_ERROR, payload)
}

export const logInDone = ({ commit }) => {
  const payload = {
    isLogIn: true,
    info: 'logIn Done!!'
  }
  commit(LOG_IN_DONE, payload)
}
// sign up
export const signUp = ({ dispatch }, params) => {
  console.log('params', params)
  auth.signUp({ type: SIGN_UP, dispatch, params })
}
export const signUpSuccess = ({ commit }, payload) => {
  commit(SIGN_UP_SUCCESS, payload)
}

export const signUpError = ({ commit }) => {
  const payload = {
    status: false,
    info: 'sign up fail!!'
  }
  commit(SIGN_UP_ERROR, payload)
}

export const signUpDone = ({ commit }) => {
  const payload = {
    isSignUp: true,
    info: 'sign up Done!!'
  }
  commit(SIGN_UP_DONE, payload)
}
// log out
export const logOut = ({ dispatch }, params) => {
  auth.logOut({ type: LOG_OUT, dispatch, params })
}
export const logOutSuccess = ({ commit }, payload) => {
  commit(LOG_OUT_SUCCESS, payload)
}

export const logOutError = ({ commit }) => {
  const payload = {
    status: false,
    info: 'log out fail!!'
  }
  commit(LOG_OUT_ERROR, payload)
}

export const logOutDone = ({ commit }) => {
  const payload = {
    isLogOut: true,
    info: 'log out Done!!'
  }
  commit(LOG_OUT_DONE, payload)
}

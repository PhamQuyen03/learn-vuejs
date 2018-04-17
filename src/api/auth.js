import * as client from './client'
export const getUserInfo = ({ type, dispatch, id }) => {
  const url = `/user/${id}`
  client.get(type, dispatch, url)
}
export const logIn = ({ type, dispatch, params }) => {
  const url = '/login'
  client.post({ type, dispatch, url, params })
}
export const signUp = ({ type, dispatch, params }) => {
  const url = 'sign_up'
  client.post({ type, dispatch, url, params })
}
export const logOut = ({ type, dispatch }) => {
  const url = 'log_out'
  client.post({ type, dispatch, url })
}

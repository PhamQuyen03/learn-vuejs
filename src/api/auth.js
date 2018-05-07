import * as client from './client'
export const getUserInfo = ({ type, dispatch, id }) => {
  const url = `/user/${id}`
  client.get(type, dispatch, url)
}
export const logIn = ({ type, dispatch, data }) => {
  const { email, password } = data
  const url = `/users/login?email=${email}&password=${password}`
  client.post({ type, dispatch, url })
}
export const signUp = ({ type, dispatch, params }) => {
  const url = '/users/registration?email=quyenpt@wefit.vn&password=12345678'
  client.post({ type, dispatch, url, params })
}
export const logOut = ({ type, dispatch, header }) => {
  const url = '/logout'
  const { token } = header
  client.deleted({ type, dispatch, url, token })
}

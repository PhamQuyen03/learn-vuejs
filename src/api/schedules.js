import * as client from './client'
export const getMySession = ({ type, dispatch, userId, token }) => {
  const url = `/users/${userId}/sessions`
  client.get({ type, dispatch, url })
}
export const getSchedules = ({ type, dispatch, params, token }) => {
  const url = `/sessions`
  client.get({ type, dispatch, url, params, token })
}

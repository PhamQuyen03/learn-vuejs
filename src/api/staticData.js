import * as client from './client'
export const get = ({ type, dispatch }) => {
  const url = '/amenities/with_locales'
  client.get({ type, dispatch, url })
}

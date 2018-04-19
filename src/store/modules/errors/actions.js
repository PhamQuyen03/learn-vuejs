import { DETECTHTTPCOMMONERROR } from '../../constantTypes'

export const detectHttpCommonError = ({ commit }, error) => {
  let message = [error.message]
  if (error.message === 'Network Error') {
    message = 'Network Error, please check your connect internet and try again!'
  }
  if (Array.isArray(message)) {
    message = message.join('/n')
  }
  commit(DETECTHTTPCOMMONERROR, message)
}

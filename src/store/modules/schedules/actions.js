import { SCHEDULES } from '../../constantTypes'
import * as schedules from '../../../api/schedules'

const { GET_CHEDULES_SESSION, GET_CHEDULES_SESSION_DONE, GET_CHEDULES_SESSION_ERROR, GET_CHEDULES_SESSION_SUCCESS } = SCHEDULES

export const getChedulesSession = ({ dispatch, commit }, header) => {
  const { params, token } = header
  schedules.getSchedules({ type: GET_CHEDULES_SESSION, dispatch, params, token })
  commit(GET_CHEDULES_SESSION)
}
export const getChedulesSessionSuccess = ({ commit }, payload) => {
  commit(GET_CHEDULES_SESSION_SUCCESS, payload)
}

export const getChedulesSessionError = ({ commit }) => {
  commit(GET_CHEDULES_SESSION_ERROR, 'Load list schedules fail!')
}

export const getChedulesSessionDone = ({ commit }) => {
  commit(GET_CHEDULES_SESSION_DONE, true)
}

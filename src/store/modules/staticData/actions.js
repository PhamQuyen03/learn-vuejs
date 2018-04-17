import { STATIC_DATA } from '../../constantTypes'
import * as staticData from '../../../api/staticData'

const { GET_AMENITIES, GET_AMENITIES_DONE, GET_AMENITIES_ERROR, GET_AMENITIES_SUCCESS } = STATIC_DATA

export const getAmenities = ({ dispatch }, params) => {
  console.log('params', params)
  staticData.get({ type: GET_AMENITIES, dispatch })
}
export const getAmenitiesSuccess = ({ commit }, payload) => {
  commit(GET_AMENITIES_SUCCESS, payload)
}

export const getAmenitiesError = ({ commit }) => {
  commit(GET_AMENITIES_ERROR, 'Load list schedules fail!')
}

export const getAmenitiesDone = ({ commit }) => {
  commit(GET_AMENITIES_DONE, true)
}


import * as actions from './actions'
import { STATIC_DATA } from '../../constantTypes'

const { GET_AMENITIES, GET_AMENITIES_DONE, GET_AMENITIES_SUCCESS, GET_AMENITIES_ERROR } = STATIC_DATA

export default {
  actions,
  state: {
    isLoading: false,
    success: false
  },
  mutations: {
    [GET_AMENITIES] (state) {
      state.isLoading = true
    },
    [GET_AMENITIES_SUCCESS] (state, payload) {
      const { data: { result, success } } = payload
      state.isLoading = true
      state.list = result
      state.success = success
    },
    [GET_AMENITIES_DONE] (state, payload) {
      state.isLoading = false
    },
    [GET_AMENITIES_ERROR] (state, payload) {
    }
  }
}

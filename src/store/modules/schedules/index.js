
import * as actions from './actions'
import { SCHEDULES } from '../../constantTypes'

const { GET_CHEDULES_SESSION, GET_CHEDULES_SESSION_DONE, GET_CHEDULES_SESSION_ERROR, GET_CHEDULES_SESSION_SUCCESS } = SCHEDULES

export default {
  actions,
  state: {
    isLoading: false,
    dataSessions: null
  },
  mutations: {
    [GET_CHEDULES_SESSION] (state) {
      state.dataSessions = null
    },
    [GET_CHEDULES_SESSION_SUCCESS] (state, payload) {
      const { data: { result, success } } = payload
      state.dataSessions = result
      state.isLoading = success
    },
    [GET_CHEDULES_SESSION_DONE] (state, payload) {
      state.isLoading = false
    },
    [GET_CHEDULES_SESSION_ERROR] (state, payload) {
    }
  }
  // getters: {
  //   getAmenities: state => () => {
  //     this.$store.dispatch('getAmenities')
  //   }
  // }
}

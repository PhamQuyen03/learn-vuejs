
import * as actions from './actions'
import { STATIC_DATA } from '../../constantTypes'

const { GET_AMENITIES_DONE, GET_AMENITIES_SUCCESS, GET_AMENITIES_ERROR } = STATIC_DATA

export default {
  actions,
  state: {
    isLoading: false,
    list: []
  },
  mutations: {
    [GET_AMENITIES_SUCCESS] (state, payload) {
      const { data: { success, result } } = payload
      this.state.staticData.isLoading = success
      this.state.staticData.list = result
    },
    [GET_AMENITIES_DONE] (state, payload) {
      console.log('get amenities done')
    },
    [GET_AMENITIES_ERROR] (state, payload) {
      console.log('get amenities error')
    }
  }
  // getters: {
  //   getAmenities: state => () => {
  //     this.$store.dispatch('getAmenities')
  //   }
  // }
}

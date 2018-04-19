
import * as actions from './actions'
import { STATIC_DATA } from '../../constantTypes'

const { GET_AMENITIES_DONE, GET_AMENITIES_SUCCESS, GET_AMENITIES_ERROR } = STATIC_DATA

export default {
  actions,
  state: {
    isLoading: true,
    list: []
  },
  mutations: {
    [GET_AMENITIES_SUCCESS] (state, payload) {
      const { data: { result } } = payload
      this.state.staticData.isLoading = true
      this.state.staticData.list = result
    },
    [GET_AMENITIES_DONE] (state, payload) {
      this.state.staticData.isLoading = false
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

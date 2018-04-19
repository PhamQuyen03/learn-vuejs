
import * as actions from './actions'
import { DETECTHTTPCOMMONERROR } from '../../constantTypes'

export default {
  actions,
  state: {
    isLoading: false,
    list: []
  },
  mutations: {

    [DETECTHTTPCOMMONERROR] (state, payload) {
      console.log('error detectHttpcommon', payload)
    }
  }
  // getters: {
  //   getAmenities: state => () => {
  //     this.$store.dispatch('getAmenities')
  //   }
  // }
}

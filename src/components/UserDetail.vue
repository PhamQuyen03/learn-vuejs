<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Tuoi toi: {{ detailAge }}</p>
        <button v-on:click="changeAge">Doi tuoi</button>
    </div>
</template>
<script>
// import { eventBus } from '../main'

export default {
  props: ['detailAge'],
  beforeUpdate () {
    console.log('static data beforeUpdate detail', this.count)
  },
  updated () {
    // Fired every second, should always be true
    console.log('static data updated detail', this.count)
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    changeAge () {
      this.count = this.detailAge + 1
      this.$emit('ageWasUpdated', this.count)
    }
  }
  // created () {
  //   eventBus.$on('ageWasEdited', (age) => {
  //     this.age = age
  //   })
  // }
}
</script>

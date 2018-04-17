<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Tuoi toi: {{ age }}</p>
        <button v-on:click="changeAge">Doi tuoi</button>
    </div>
</template>
<script>
import { eventBus } from '../main'

export default {
  props: ['age'],
  methods: {
    changeAge () {
      this.age = this.age + 1
      this.$emit('ageWasUpdated', this.age)
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (age) => {
      this.age = age
    })
  }
}
</script>

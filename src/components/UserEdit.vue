<template>
    <div class="component">
        <h3>Edit User</h3>
        <p>Tuoi cua toi: {{ userAge }}</p>
        <button @click="editAge">Thay doi</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  props: ['userAge'],
  data () {
    return {
      count: 0
    }
  },
  methods: {
    editAge () {
      this.count = this.userAge + 1
      this.$emit('ageWasEdit', this.count)
      eventBus.$emit('ageWasEdited', this.count)
    }
  }
}
</script>

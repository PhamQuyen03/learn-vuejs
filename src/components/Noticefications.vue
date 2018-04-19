<template>
<div>
    <el-button
    plain
    @click="open">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click="open2">
    Won't close automatically
    </el-button>
</div>
</template>

<script>
export default {
  name: 'NoticeFications',
  methods: {
    open () {
      this.$notify({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
        position: 'bottom-right'
      })
    },
    open2 () {
      this.$notify({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0
      })
    }
  }
}
</script>

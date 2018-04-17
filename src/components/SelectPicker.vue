<template>
  <el-select style="color: #e82e81 !important" v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :label="item.label">
      <span style="color: #e82e81 !important">{{ item.label }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: ['options', 'titlePicker'],
  name: 'select-picker',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleCommand (command) {
      console.log('click on item ', command)
    }
  }
}
</script>
<style scope>
span{
  font-weight: bold
}
.el-select input{
  color: #e82e81 !important;
  font-weight: bold
}
</style>

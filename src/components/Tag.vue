<template>
    <div>
        <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            type='info'
            @close="handleClose(tag)">
            {{tag}}
        </el-tag>
    </div>
</template>
<script>
export default {
  props: ['dynamicTags'],
  name: 'tag',
  data () {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {
    // a computed getter
    listTag: function () {
      // `this` points to the vm instance
      return this.props.dynamicTags
    }
  },
  methods: {
    handleClose (tag) {
      this.props.dynamicTags.splice(this.props.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.props.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
  .el-tag {
    margin-right: 10px;
    margin-bottom: 5px
  }
  .button-new-tag {
    margin-right: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-right: 10px;
    vertical-align: bottom;
  }
</style>

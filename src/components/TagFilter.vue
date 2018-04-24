<template>
    <div>
        <el-tag
            :key="tag.id"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            type='info'
            @close="handleClose(tag)">
            {{tag.name}}
        </el-tag>
    </div>
</template>
<script>
import { TYPE_TAGS } from './constants/webContants.js'

const { ADDRESS } = TYPE_TAGS
export default {
  props: ['dynamicTags'],
  data () {
    return {
      inputVisible: false,
      inputValue: '',
      tagsAddress: [{ name: 'quan 1', type: ADDRESS, id: 'ADRA1sdg' }, { name: 'quan 2', type: ADDRESS, id: 'ADRA2etf' }, { name: 'quan 3', type: ADDRESS, id: 'ADR79as9' }]
    }
  },
  watch: {
    dynamicTags: (newValue, oldValue) => {
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.$emit('emitTagFilter', this.dynamicTags)
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
        this.tagsAddress.push(inputValue)
        this.$emit('emitTagFilter', this.dynamicTags)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
  .el-tag{
    margin-right: 5px;
    margin-top: 5px;
    text-align: left;
    background-color:  #292941;
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

<template>
    <div class='home'>
        <header-content></header-content>
        <div class="line"></div>
            <!-- create studio -->
        <el-row :gutter='20'>
            <el-col :span='4'>
                <div class='grid-content bg-purple-light'>
                        <p>Mã phòng</p>
                        <el-input placeholder='mã phòng tập' v-model='code'></el-input>
                </div></el-col>
            <el-col :span='4'>
                <div class='grid-content bg-purple-light'>
                    <p>Thành phố</p>
                    <select-picker :options=optionsCity titlePicker='Chọn thành phố '></select-picker>
                </div>
            </el-col>
            <el-col :span='4'>
                <div class='grid-content bg-purple-light'>
                    <p>Trạng thái</p>
                    <select-picker :options=optionsStatus titlePicker='Chọn trạng thái'></select-picker>
                </div>
            </el-col>
            <el-col :span='4'>
                <div class='grid-content bg-purple-light'>
                    <p>Bộ môn</p>
                    <select-picker :options=optionsSubject titlePicker='Chọn bộ môn'></select-picker>
                </div>
            </el-col>
        </el-row>
        <!-- input filter -->
        <!-- tag filter -->
        <el-row :gutter='20'>
            <el-col :span='8'>
                <div class='grid-content bg-purple-light'>
                    <p>Studio</p>
                    <el-input @keyup.enter.native='addFilterStudio' placeholder='Please input' v-model='inputFilterStudio'></el-input>
                </div>
                <div class='grid-content bg-tag'>
                  <tag-filter :dynamicTags=tagsStudio @emitTagFilter="tagsStudio = $event"></tag-filter>
                </div>
            </el-col>
            <el-col :span='6'>
                <div class='grid-content bg-purple-light'>
                    <p>Quận</p>
                    <el-input @keyup.enter.native='addFilterAdress' placeholder='Please input' v-model='inputFilterAddress'></el-input>
                </div>
                <div class='grid-content bg-tag'>
                  <tag-filter :dynamicTags=tagsAddress @emitTagFilter="tagsAddress = $event"></tag-filter>
                </div>
            </el-col>
        </el-row>
        <!--  -->
        <!--  -->
        <el-row>
            <el-col :span='4'>
                <div class='grid-content bg-purple'>
                    <el-button type='danger' @click="getAmenitiesLocals" class='bt-report'><span class='btFilter'>Bắt đầu lọc</span></el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <div class='grid-content bg-purple'>
                    <h3>Tổng số kết quả: </h3>
                </div>
            </el-col>
            <el-col :span='6'>
                <div class='grid-content bg-purple'>
                    <el-button v-on:click="getAmenitiesLocals" type='danger' class='bt-report'><span class='btFilter'>Xuất danh sách Studio</span></el-button>
                </div>
            </el-col>
        </el-row>
        <!--  -->
        <table-studio></table-studio>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'
import SelectPicker from './SelectPicker.vue'
import TableStudio from './Table.vue'
import TagFilter from './TagFilter.vue'
import { TYPE_TAGS } from './constants/webContants.js'

const { STUDIO, ADDRESS } = TYPE_TAGS

export default {
  name: 'home',
  components: { HeaderContent, SelectPicker, TableStudio, TagFilter },
  data () {
    return {
      dataLocal: [],
      inputFilterStudio: '',
      inputFilterAddress: '',
      code: '',
      nameStudio: '',
      address: '',
      optionsCity: [
        { value: 'HN', label: 'Hà Nội', id: 1 },
        { value: 'HCM', label: 'Hồ Chí Minh', id: 2 }
      ],
      optionsStatus: [
        { value: 'inactive', label: 'Ngừng hoạt động', id: 1 },
        { value: 'active', label: 'Hoạt động', id: 2 }
      ],
      optionsSubject: [
        { value: 'G', label: 'Gym', id: 1 },
        { value: 'Y', label: 'Yoga', id: 2 }
      ],
      tagsStudio: [{ name: 'phong 1', type: STUDIO, id: 'STD3wsS1' }, { name: 'phong 2', type: STUDIO, id: 'STDdgsdf' }, { name: 'phong 3', type: STUDIO, id: 'STDsjals' }],
      tagsAddress: [{ name: 'quan 1', type: ADDRESS, id: 'ADRA1sdg' }, { name: 'quan 2', type: ADDRESS, id: 'ADRA2etf' }, { name: 'quan 3', type: ADDRESS, id: 'ADR79as9' }]
    }
  },
  methods: {
    openLoadingFullScreen () {
      this.$loading({
        lock: true,
        spinner: 'el-icon-loading',
        background: 'rgba(41, 41, 65, 0.7)'
      })
    },
    closeLoadingFullScreen () {
      this.$loading().close()
    },
    makeid: function () {
      let text = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    },
    addFilterStudio: function () {
      if (this.inputFilterStudio) {
        const filterStudio = { name: this.inputFilterStudio, type: STUDIO, id: 'STD' + this.makeid() }
        this.tagsStudio.push(filterStudio)
        this.inputFilterStudio = ''
      }
    },
    addFilterAdress: function () {
      if (this.inputFilterAddress) {
        const filterStudio = { name: this.inputFilterAddress, type: ADDRESS, id: 'ADR' + this.makeid() }
        this.tagsAddress.push(filterStudio)
        this.inputFilterAddress = ''
      }
    },
    handleClose (tag) {
      if (tag.type === STUDIO) {
        this.tagsStudio.splice(this.tagsStudio.indexOf(tag), 1)
      }
      if (tag.type === ADDRESS) {
        this.tagsAddress.splice(this.tagsAddress.indexOf(tag), 1)
      }
    },
    getAmenitiesLocals () {
      const { staticData } = this.$store.state
      this.$store.dispatch('getAmenities', staticData)
    },
    notificationSuccess () {
      this.$notify({
        message: 'DM Success',
        type: 'success',
        position: 'bottom-right',
        offset: 100
      })
    },
    updatedData ({ isLoading }) {
      this.isLoading = isLoading
    }
  },
  mounted () {
    const { authToken: token } = this.$store.state.auth
    const { isLoading } = this.$store.state.schedules
    this.isLoading = isLoading
    const header = {
      params: {
        page: 1,
        city_code: 'HN',
        per_page: 10
      },
      token
    }
    this.openLoadingFullScreen()
    this.$store.dispatch('getAmenities')
    this.$store.dispatch('getChedulesSession', header)
  },
  watch: {
    isLoading: function (newValue, oldValue) {
      if (!newValue && oldValue) {
        this.closeLoadingFullScreen()
        this.notificationSuccess()
      }
    }
  },
  computed: {
    isLoading: {
      get: function () {
        const { isLoading } = this.$store.state.schedules
        return isLoading
      },
      set: function (newValue) {
      }
    },
    updateDataStore () {
      const { state: { schedules: { isLoading } } } = this.$store
      this.updatedData({ isLoading })
      return 0
    }
  }
}
</script>
<style scope>
p{
    text-align: left;
    margin-top:50px;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: medium;
    color: #83358b
}
.el-tag{
    margin-right: 5px;
    margin-top: 5px;
    text-align: left;
    background-color:  #292941;
}
.bg-purple-dark{
  text-align: right;
}
.bg-purple-light {
  text-align: left;
}
.bg-purple{
  margin-top: 20px;
  text-align: left
}
.grid-content {
  margin-left: 30px
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-content h3{
    color: black !important
}
.bg-tag{
    text-align: left
}
.grid-content span{
    color: white
}
.el-input{
    font-weight: bold
}
.line{
    border-bottom: 2px solid #838282;
    margin-top: 20px;
}
.el-notification .el-icon-success {
  color: white !important
}
.el-notification {
  font-size: 12px;
  background: rgb(124, 239, 130);
}
.el-notification__closeBtn {
  color: white
}
.el-notification__content p {
  color: white
}
</style>

<template>
    <div class="component">
        <p>Ten toi la {{ name }}</p>
        <p>Toi nam nay {{ age }} tuoi</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <!-- emit child , parent -->
                <!-- <app-user-detail :age="age" @ageWasUpdated="age = $event"></app-user-detail> -->
                <app-user-detail :detail-age="age" @ageWasUpdated="age = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-edit :user-age="age" @ageWasEdit="age = $event"></app-user-edit>
            </div>
        </div>
        <!--  -->
        <app-login></app-login>
        <app-noticefication></app-noticefication>
        <!--  -->
        <el-row :gutter='20'>
            <el-col :span='8'>
                <div class='grid-content bg-purple-light'>
                    <p>Studio</p>
                    <el-input @keyup.enter.native='addFilterStudio' placeholder='Please input' v-model='inputFilterStudio'></el-input>
                </div>
            </el-col>
            <el-col :span='6'>
                <div class='grid-content bg-purple-light'>
                    <p>Quận</p>
                    <el-input @keyup.enter.native='addFilterAdress' placeholder='Please input' v-model='inputFilterAddress'></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter='20'>
            <el-col :span='8'>
                <div class='grid-content bg-tag'>
                  <app-filter :dynamicTags=tagsStudio @emitTagFilter="tagsStudio = $event"></app-filter>
                </div>
            </el-col>
            <el-col :span='6'>
                <div class='grid-content bg-tag'>
                  <app-filter :dynamicTags=tagsAddress @emitTagFilter="tagsAddress = $event"></app-filter>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'
import TagFilter from './TagFilter.vue'
import Login from './Login.vue'
import Noticefications from './Noticefications.vue'
import { TYPE_TAGS } from './constants/webContants.js'

const { ADDRESS, STUDIO } = TYPE_TAGS
export default {
  data: function () {
    return {
      inputFilterAddress: '',
      inputFilterStudio: '',
      name: 'Duy',
      age: 23,
      tagsStudio: [{ name: 'phong 1', type: STUDIO, id: 'STD3wsS1' }, { name: 'phong 2', type: STUDIO, id: 'STDdgsdf' }, { name: 'phong 3', type: STUDIO, id: 'STDsjals' }],
      tagsAddress: [{ name: 'quan 1', type: ADDRESS, id: 'ADRA1sdg' }, { name: 'quan 2', type: ADDRESS, id: 'ADRA2etf' }, { name: 'quan 3', type: ADDRESS, id: 'ADR79as9' }]
    }
  },

  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
    appFilter: TagFilter,
    appLogin: Login,
    appNoticefication: Noticefications
  },
  methods: {
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
    }
  },
  computed: {
    getStaticData () {
      this.$store.dispatch('getAmenities')
      return 0
    }
  }
}
</script>

<template>
    <div class="component">
        <p>Ten toi la {{ name }}</p>
        <p>Toi nam nay {{ age }} tuoi</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <!-- emit child , parent -->
                <!-- <app-user-detail :age="age" @ageWasUpdated="age = $event"></app-user-detail> -->
                <app-user-detail :age="age" @ageWasUpdated="age = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-edit :user-age="age" @ageWasEdit="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data: function () {
    return {
      name: 'Duy',
      age: 23
    }
  },

  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  computed: {
    getStaticData () {
      this.$store.dispatch('getAmenities')
      return 0
    }
  }
}
</script>

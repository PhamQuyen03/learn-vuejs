<template>
<div>
  <div class="logo">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="header-img">
            <img v-bind:src="getImgUrl('logo_wefit')" class="logo_wefit">
            <span class="name-logo">WeFit</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">
          <div class="user-info">
            <div class="name-user">quyen</div>
            <el-dropdown @command="handleCommand">
              <img v-bind:src="getImgUrl('user')" class="avatar">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">Setting</el-dropdown-item>
                <el-dropdown-item command="c" divided>Log Out</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-header>
    <el-menu
        background-color="rgb(41, 41, 65, 0.7)"
        active-text-color="#e82e81"
        text-color="#fff"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :route="true"
        @select="handleSelect">
        <el-menu-item index="home"><a href="/">Wefit Admin</a></el-menu-item>
        <el-menu-item index="user"><a href="/#/user">Branch</a></el-menu-item>
        <el-menu-item index="box"><a href="/#/box">Box</a></el-menu-item>
    </el-menu>
  </el-header>
</div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      img_logp: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    getImgUrl (namePic) {
      return require(`../../assets/${namePic}.png`)
    },
    handleCommand (command) {
    }
  },
  computed: {
    activeIndex: {
      get: function () {
        const { currentRoute: { name } } = this.$store.state.router
        return name
      },
      set: function (newValue) {
      }
    }
  }
}
</script>
<style scope>
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
.el-menu {
  height: 40px;
}
.el-menu-item {
  font-weight: bold;
  font-size: 15px;
  color: white !important;
  background-color: transparent !important
}
.el-menu-item a:hover {
  text-decoration-line: none
}
.el-header{
  padding: 0px !important;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 3px solid rgb(232, 46, 129) !important;
}
.el-menu--horizontal>.el-menu-item {
  height: 40px;
  line-height: 40px;
}
.logo .el-row {
  background-color: rgba(41, 41, 65);
}
.user-info {
  margin-right: 40px;
  display: inline-flex;
}
.name-user {
  color: white;
  margin-top: 15px;
  margin-right: 10px;
  font-weight: normal
}
.avatar{
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
}
.header-img {
  display: inline-flex;
}
.logo_wefit {
  margin-bottom: 15px;
}
.name-logo {
  margin-left: 8px;
  font-weight: normal !important;
  font-size: 20px !important;
}
.dropdown {
  margin-top: 20px
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
.grid-content span{
    color: white
}
</style>

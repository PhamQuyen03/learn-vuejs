<template>
  <el-header>
    <el-menu
        background-color="#83358b"
        active-text-color="#e82e81"
        text-color="#fff"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :route="true"
        @select="handleSelect">
        <el-menu-item index="home"><a href="/">Wefit Admin</a></el-menu-item>
        <el-menu-item index="user"><a href="/#/user">Branch</a></el-menu-item>
        <el-menu-item index="3">Studio</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log('key', key)
      console.log('path', keyPath)
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
<style>
.el-menu-item {
  font-weight: bold;
  font-size: 20px;
  color: white !important;
}
.el-menu-item a:hover {
  text-decoration-line: none
}
.el-header{
  padding: 0px !important;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 3px solid rgb(232, 46, 129) !important
}
</style>

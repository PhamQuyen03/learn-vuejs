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
        <el-menu-item index="1"><a href="/">Wefit Admin</a></el-menu-item>
        <el-menu-item index="2"><a href="http://localhost:8080/#/user">Branch</a></el-menu-item>
        <el-menu-item index="3">Studio</el-menu-item>
        <el-menu-item index="4">Citis</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-menu-item{
  font-weight: bold;
  color: white !important;
}
.el-header{
  padding: 0px !important;
}
</style>

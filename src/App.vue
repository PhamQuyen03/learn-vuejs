<template>
  <div id="app">
    <layout></layout>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
import layout from './components/layout/index.vue'

export default {
  name: 'App',
  components: { layout }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

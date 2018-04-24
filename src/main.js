// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
// import element-ui
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store/index'
export const eventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI, { locale })

Vue.use(BootstrapVue)
store.state.router = router
const vue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', () => vue)

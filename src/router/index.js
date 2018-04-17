import Vue from 'vue'
import Router from 'vue-router'
import Box from '../components/Box'
import User from '../components/User.vue'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/box/',
      name: 'box',
      component: Box
    },
    {
      path: '/user/',
      name: 'user',
      component: User
    }
  ]
})

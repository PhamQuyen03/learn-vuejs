import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Box from '../components/Box'
import User from '../components/User.vue'
import Home from '../components/Home'
import { PATH } from '../constants'

const { LOGIN, REGISTER } = PATH

Vue.use(Router)

const router = new Router({
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
      path: '/login/',
      name: 'user',
      component: User
    }
  ]
})
// auth permission
router.beforeEach((to, from, next) => {
  const { path } = to
  if (path === LOGIN) {
    store.dispatch('initApp').then(response => {
      const { auth: { authToken } } = response
      if (authToken) {
        next('/')
      } else {
        next()
      }
    })
  } else {
    store.dispatch('initApp').then(response => {
      const { auth: { authToken } } = response
      if (authToken) {
        if (path === REGISTER) {
          next('/')
        } else {
          next()
        }
      } else {
        if (path === REGISTER) {
          next()
        } else {
          next(LOGIN)
        }
      }
    })
  }
})

export default router

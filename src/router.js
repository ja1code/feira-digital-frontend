import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "group-foo" */ './views/Search.vue')
    },
    {
      path: '/nav',
      name: 'Navigate',
      component: () => import(/* webpackChunkName: "group-foo" */ './views/Navigate.vue')
    }
  ]
})

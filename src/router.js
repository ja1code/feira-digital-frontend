import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'main',
      component: Main
    },
    {
      path: '/',
      name: 'search',
      component: () => import(/* webpackChunkName: "group-foo" */ './views/Search.vue')
    }
  ]
})

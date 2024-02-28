import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '*',
      name: '404',
      component: NotFoundPage
    }
  ]

})

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/page/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Index.vue'], resolve)
        },
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve)
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/1th-login.vue')
    }, {
      path: '/page1',
      name: 'page1',
      component: require('../views/2th-page.vue')
    },{
      path: '/page2',
      name: 'page2',
      component: require('../views/3th-page.vue')
    },{
      path: '/page3',
      name: 'page3',
      component: require('../views/4th-page.vue')
    },{
      path: '/page4',
      name: 'page4',
      component: require('../views/5th-page.vue')
    }
  ]
})

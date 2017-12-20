import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/1th-login.vue')
    },{
      path: '/part1',
      name: 'part1',
      component: require('../views/2th-part1.vue')
    },{
      path: '/part2',
      name: 'part2',
      component: require('../views/3th-part2.vue')
    },{
      path: '/part3',
      name: 'part3',
      component: require('../views/4th-part3.vue')
    },{
      path: '/part4',
      name: 'part4',
      component: require('../views/5th-part4.vue')
    }
  ]
})

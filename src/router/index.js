import Vue from 'vue'
import Router from 'vue-router'
import menu from 'COMPONENTS/menu/index'
import seller from 'COMPONENTS/seller/index'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/menu'
  }, {
    path: '/menu',
    component: menu
  }, {
    path: '/seller',
    component: seller
  }]
})

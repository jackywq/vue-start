import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import profileList from '../views/children/profileList.vue'
import profileItem from '../views/children/profileItem.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/list',
        component: profileList
      },
      {
        path: '/home/item',
        component: profileItem
      }
    ]
  },
  {
    path: '/about/:id',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

// token失效
// const auth = {
//   islogin() {
//     return false
//   }
// }
// // 全局前置守卫
// router.beforeEach((to, from, next) => {
//   // 不是登录url, 但是token已失效，返回到登录界面
//   if (to.path !== '/login' && !auth.islogin()) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router

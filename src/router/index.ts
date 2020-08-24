import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import VueXState from '../views/VueXState/index.vue'
import VueRoute from '../views/VueRoute.vue'

/* eslint-disable */
// 修复 Error: Avoided redundant navigation to current location:报错，提示路由重复问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location: any) {
  return (originalPush.call(this, location) as any).catch((err: any) => err)
}

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vueXState',
    name: 'VueXState',
    component: VueXState,
  },
  {
    path: '/vueRoute',
    name: 'VueRoute',
    component: VueRoute,
  },
]

const router = new VueRouter({
  routes,
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

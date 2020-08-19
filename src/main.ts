import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'

import { Button, Tabs, message } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Tabs)

Vue.prototype.$message = message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, DECREMENT } from './mutations-type'
import ModuleA from './moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  // 唯一数据源
  // 在组件中，1）通过this.$store.state.属性名获取  2）通过mapState获取store里state (helloWorld.vue)
  state: {
    count: 0
  },
  // 1. mutations【同步操作】
  // 2. 在组件中，1）通过this.$store.commit('方法名')来触发mutations, 2）通过mapMutations辅助函数方式(helloWorld.vue)
  mutations: {
    [INCREMENT] (state, payload) {
      if (payload && payload.count) {
        state.count += payload.count
      } else {
        state.count++
      }
    },
    [DECREMENT] (state) {
      state.count--
    }
  },
  // 1. actions【异步操作】
  // 2. 在组件中，1) 通过this.$store.dispatch('方法名')来触发actions, 2) 通过mapActions辅助函数方式(helloWorld.vue)
  // 3. 在actions中，不能直接修改state数据，必须要通过context.commit()触发某个mutation才行
  actions: {
    incrementAsync (context, payload) {
      setTimeout(() => {
        context.commit(INCREMENT, payload)
      }, 1000)
    }
  },
  // 【重要】getters只是对store的数据进行包装处理, 并不会对state作任何改变，相当于computed计算属性
  // 1. 在组件中，1）通过this.$store.getters.名称  2) 通过mapGetters辅助函数方式，放到computed计算属性里（helloworld.vue）
  getters: {
    getCount (state) {
      return state.count
    }
  },
  modules: {
    ModuleA
  }
})

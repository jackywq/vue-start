import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT, DECREMENT } from './mutations-type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 1. mutations【同步操作】
  // 2. 在组件中，可以通过this.$store.commit('方法名')来触发mutations, 或者mapMutations
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
  // 2. 在组件中，通过this.$store.dispatch('方法名')来触发actions
  // 3. 在actions中，不能直接修改state数据，必须要通过context.commit()触发某个mutation才行
  actions: {
    incrementAsync (context, payload) {
      setTimeout(() => {
        context.commit(INCREMENT, payload)
      }, 1000)
    }
  },
  modules: {
  }
})

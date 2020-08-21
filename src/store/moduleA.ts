const moduleA = {
  // 成为命名空间的模块，它的所有getters、actions以及mutations都会自动根据模块注册的路径调整命名, eg: [模块名/方法名]
  // 官网链接： https://vuex.vuejs.org/zh/guide/modules.html
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    add(state: { count: number }) {
      // this.$store.commit('ModuleA/add')
      state.count++
    },
  },
}

export default moduleA

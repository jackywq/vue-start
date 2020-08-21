
const moduleA = {
  state: {
    count: 0
  },
  mutations: {
    add (state: { count: number; }) {
      state.count++
    }
  }
}

export default moduleA

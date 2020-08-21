<template>
  <div class="about">
    <h3>vuex module 测试：</h3>
    <p>当前count的值为：{{count}}</p>
    <a-button type="primary" @click="handleAdd">+1</a-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'ModuleA',
  methods: {
    handleAdd () {
      // this.$store.commit('module/moduleA/add')
      console.log(1111111)
    }
  },
  computed: {
    ...mapState({
      count: state => state.moduleA.count
    })
  }
}
</script>

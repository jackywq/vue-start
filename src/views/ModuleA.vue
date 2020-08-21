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
    ...mapMutations(['ModuleA/add']),
    handleAdd () {
      this['ModuleA/add']()
      // this.$store.commit('ModuleA/add')
    }
  },
  computed: {
    ...mapState({
      count: state => state.ModuleA.count
    })
  }
}
</script>

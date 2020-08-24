<template>
  <div class="moduleA">
    <h3>vuex module 测试：</h3>
    <p>当前count的值为：{{ count }}</p>
    <a-button type="primary" @click="handleAdd">
      +1
    </a-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'ModuleA',
  computed: {
    ...mapState({
      count: (state) => state.ModuleA.count,
    }),
  },
  methods: {
    ...mapMutations(['ModuleA/add']),
    handleAdd() {
      this['ModuleA/add']()
      // this.$store.commit('ModuleA/add')
    },
  },
}
</script>
<style lang="less">
.moduleA {
  margin-top: 50px;
}
</style>

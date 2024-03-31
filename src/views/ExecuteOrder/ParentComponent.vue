<template>
  <div>
    <child-component></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent,
  },
  beforeCreate() {
    console.log('父组件 beforeCreate')
  },
  created() {
    console.log('父组件 created')
  },
  beforeMount() {
    console.log('父组件 beforeMount')
  },
  mounted() {
    console.log('父组件 mounted')
  },
  beforeUpdate() {
    console.log('父组件 beforeUpdate')
  },
  updated() {
    console.log('父组件 updated')
  },
  beforeDestroy() {
    console.log('父组件 beforeDestroy')
  },
  destroyed() {
    console.log('父组件 destroyed')
  },
}
</script>

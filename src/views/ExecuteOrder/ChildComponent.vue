<template>
  <div>子组件内容</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('子组件 beforeCreate')
  },
  created() {
    console.log('子组件 created')
  },
  beforeMount() {
    console.log('子组件 beforeMount')
  },
  mounted() {
    console.log('子组件 mounted')
  },
  beforeUpdate() {
    console.log('子组件 beforeUpdate')
  },
  updated() {
    console.log('子组件 updated')
  },
  beforeDestroy() {
    console.log('子组件 beforeDestroy')
  },
  destroyed() {
    console.log('子组件 destroyed')
  },
}
</script>

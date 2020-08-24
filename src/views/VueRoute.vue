<template>
  <div>
    <h3>vue-router跳转测试：</h3>
    <a @click="handleToAbout">跳转到首页</a>
  </div>
</template>

<script>
export default {
  name: 'VueRoute',
  methods: {
    handleToAbout() {
      this.$router.push('/home')
    },
  },
}
</script>

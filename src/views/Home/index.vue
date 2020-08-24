<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="childContent">
      <router-view />
    </div>
  </div>
</template>

<script>
// 子组件引入
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>

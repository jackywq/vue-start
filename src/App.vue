<template>
  <div id="app">
    <div id="nav">
      <a-tabs default-active-key="home" @change="handleTabsClick">
        <a-tab-pane key="home" tab="首页" />
        <a-tab-pane key="about" tab="关于" />
      </a-tabs>
      <!-- <router-link to="/home">首页</router-link> |
      <router-link to="/about">关于</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="javascript">
export default {
  name: 'App',
  methods: {
    handleTabsClick (value) {
      this.$router.push(`/${value}`)
    }
  }
}
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

<template>
  <div id="app">
    <div id="nav">
      <a-tabs :default-active-key="curKey" @change="handleTabsClick">
        <a-tab-pane key="home" tab="首页" />
        <a-tab-pane key="vueXState" tab="vuex" />
        <a-tab-pane key="vueRoute" tab="vue-router" />
      </a-tabs>
    </div>
    <!-- 组件和路径的一种映射，路由的出口，不加router-view页面无法跳转显示 -->
    <router-view />
  </div>
</template>

<script lang="javascript">
export default {
  name: 'App',
  data: function() {
    return {
      curKey: 'home'
    };
  },
  created () {
    const { path } = this.$route;
    this.curKey = path.slice(1);
  },
  methods: {
    handleTabsClick (value) {
      this.$router.push(`/${value}`)
    }
  },
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

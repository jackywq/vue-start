<template>
  <div class="hello">
    <div>
      <h3>跳转测试：</h3>
      <a @click="handleToAbout">跳转到about页面</a>
    </div>
    <div>
      <h3>transition测试：</h3>
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script lang="javascript">
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      show: true
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleToAbout () {
      this.$router.push('/about/123')
    }
  }
}
</script>

<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

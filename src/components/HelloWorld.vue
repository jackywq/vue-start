<template>
  <div class="hello">
    <div>
      <h3>transition测试：</h3>
      <a-button type="primary" @click="show = !show">
        Toggle
      </a-button>
      <transition name="fade">
        <p v-if="show">
          hello
        </p>
      </transition>
    </div>
    <div>
      <h3>v-model测试：</h3>
      <p>{{ message }}</p>
      <input v-model="message" />
    </div>
  </div>
</template>

<script lang="javascript">

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      show: true,
      message: 'Hello Vue!'
    }
  },
}
</script>

<style scoped lang="less">
.hello {
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>

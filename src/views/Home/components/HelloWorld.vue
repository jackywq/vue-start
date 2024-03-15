<template>
  <div class="hello">
    <div>
      <h3>transition测试：</h3>
      <a-button type="primary" @click="show = !show">Toggle</a-button>
      <transition name="slide-fade">
        <p v-show="show">hello</p>
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
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>

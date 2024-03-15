<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <h3>$nextTick测试：</h3>
      <div ref="msgDiv">{{ msg }}</div>
      <div v-if="msg1">Message got outside $nextTick: {{ msg1 }}</div>
      <div v-if="msg2">Message got inside $nextTick: {{ msg2 }}</div>
      <div v-if="msg3">Message got outside $nextTick: {{ msg3 }}</div>
      <button @click="changeMsg">Change the Message</button>
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
  data: function () {
    return {
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: '',
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      // $nextTick，异步执行
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
  },
}
</script>

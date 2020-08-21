<template>
  <div class="hello">
    <div>
      <h3>跳转测试：</h3>
      <a @click="handleToAbout">跳转到about页面</a>
    </div>
    <div>
      <h3>transition测试：</h3>
      <a-button type="primary" v-on:click="show = !show">
        Toggle
      </a-button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div>
      <h3>vuex测试：</h3>
      <p>当前count的值为：{{count}}</p>
      <a-button type="primary" @click="handleAdd">+1</a-button>
      <a-button type="primary" @click="handleDel" class="left-tap">-1</a-button>
      <a-button type="primary" @click="handleAddAsync" class="left-tap">+1 async</a-button>
      <div class="top-tap">
        <a-button type="primary" @click="handleAddn" class="left-tap">+n</a-button>
        <a-button type="primary" @click="handleAddnAsync" class="left-tap">+n async</a-button>
        <a-input style="width: 200px" class="left-tap" placeholder="请输入count" @change="handleInputChange" />
      </div>
      <div class="top-tap">
        <div>
          <b>getters:</b>
          <!-- {{ this.$store.getters.getCount }} -->
          获取当前count最新的值: {{getCount}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="javascript">
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      show: true,
      inputValue: 0
    }
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    ...mapActions(['incrementAsync']),
    handleToAbout () {
      this.$router.push('/about/123')
    },
    handleAdd () {
      // this.$store.commit({ type: 'INCREMENT' })
      this.INCREMENT()
    },
    handleAddAsync () {
      this.$store.dispatch('incrementAsync')
    },
    handleDel () {
      // this.$store.commit({ type: 'DECREMENT' })
      this.DECREMENT()
    },
    handleAddn () {
      if (this.inputValue) {
        // this.$store.commit({ type: 'INCREMENT', count: this.inputValue })
        this.INCREMENT({ count: this.inputValue })
      }
    },
    handleAddnAsync () {
      if (this.inputValue) {
        this.incrementAsync({ count: this.inputValue })
        // this.$store.dispatch('incrementAsync', { count: this.inputValue })
      }
    },
    handleInputChange (e) {
      const { value } = e.target
      this.inputValue = parseInt(value, 10)
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCount'])
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
  .left-tap {
    margin-left: 10px;
  }
  .top-tap {
    margin-top: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

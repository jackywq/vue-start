<template>
  <div class="vuex">
    <div>
      <h3>vuex测试：</h3>
      <p>当前count的值为：{{ count }}</p>
      <a-button type="primary" @click="handleAdd">
        +1
      </a-button>
      <a-button type="primary" class="left-tap" @click="handleDel">
        -1
      </a-button>
      <a-button type="primary" class="left-tap" @click="handleAddAsync">
        +1 async
      </a-button>
      <div class="top-tap">
        <a-button type="primary" class="left-tap" @click="handleAddn">
          +n
        </a-button>
        <a-button type="primary" class="left-tap" @click="handleAddnAsync">
          +n async
        </a-button>
        <a-input
          style="width: 200px;"
          class="left-tap"
          placeholder="请输入count"
          @change="handleInputChange"
        />
      </div>
      <div class="top-tap">
        <div>
          <b>getters:</b>
          <!-- {{ this.$store.getters.getCount }} -->
          获取当前count最新的值: {{ getCount }}
        </div>
      </div>
    </div>
    <ModuleA />
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import ModuleA from './components/moduleA.vue'

export default {
  name: 'VueXState',
  components: {
    ModuleA,
  },
  data: function () {
    return {
      inputValue: 0,
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCount']),
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT', 'VueXState/add']),
    ...mapActions(['incrementAsync']),
    handleAdd() {
      // this.$store.commit({ type: 'INCREMENT' })
      this.INCREMENT()
    },
    handleAddAsync() {
      this.$store.dispatch('incrementAsync')
    },
    handleDel() {
      // this.$store.commit({ type: 'DECREMENT' })
      this.DECREMENT()
    },
    handleAddn() {
      if (this.inputValue) {
        // this.$store.commit({ type: 'INCREMENT', count: this.inputValue })
        this.INCREMENT({ count: this.inputValue })
      }
    },
    handleAddnAsync() {
      if (this.inputValue) {
        this.incrementAsync({ count: this.inputValue })
        // this.$store.dispatch('incrementAsync', { count: this.inputValue })
      }
    },
    handleInputChange(e) {
      const { value } = e.target
      this.inputValue = parseInt(value, 10)
    },
  },
}
</script>
<style scoped lang="less">
.vuex {
  .left-tap {
    margin-left: 10px;
  }
  .top-tap {
    margin-top: 10px;
  }
}
</style>

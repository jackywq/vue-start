<template>
  <div class="about">
  </div>
</template>

<script>
export default {
  name: 'About',
  beforeCreate () {
    console.log(this.$route.query.id)
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

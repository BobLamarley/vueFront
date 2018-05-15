<template>
  <div id="app">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  name: 'App',
  components: {
    layout
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
/*  color: #2c3e50;
  margin-top: 60px; */
}

</style>

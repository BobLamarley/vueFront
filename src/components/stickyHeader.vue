<template>
  <div class="header">
      <materialBurger></materialBurger>
      <img src='../assets/images/bigears.svg' height="60">
  </div>
</template>

<script>
import materialBurger from './materialBurger.vue'

export default {
  name: 'stickyHeader',
  components: {
    materialBurger
  }
}
</script>

<style>
html {
    color: #222;
    font-size: 1em;
    line-height: 1.4;
}

body{
    font-family: 'Roboto', sans-serif;
}

.header{
    z-index: 1;
    background: #5677fc;
    position: fixed;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);
}

.material-burger{
    float: left;
    margin: 25px;
}

.material-burger span,
.material-burger span:after,
.material-burger span:before{
    background: #FFF;
}

</style>

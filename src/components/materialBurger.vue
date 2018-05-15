<template>
  <div class="material-burger left" v-bind:class="{ 'material-burger-transformed': isMenuOpen }" v-on:click="menuAction">
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'materialBurger',
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    menuAction: function () {
      if (this.isMenuOpen === false) {
        this.isMenuOpen = true
        this.$store.commit('openMenu')
      } else if (this.isMenuOpen === true) {
        this.isMenuOpen = false
        this.$store.commit('closeMenu')
      }
    }
  }
}
</script>

<style scoped>
.material-burger
{
  position: relative;
  font-size: 12px;
  width: 20px;
  height: 15px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.material-burger span
{
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  left: 0;
  background: #000;
  margin-top: -2px;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.material-burger span:after,
.material-burger span:before
{
  content: '';
  position: absolute;
  background: #000;
  width: 100%;
  height: 100%;
  left: 0;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.material-burger span:before
{
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.material-burger span:after
{
  -webkit-transform: translateY(6px);
  transform: translateY(6px);
}

/* Transformed State */

.material-burger.material-burger-transformed.left
{
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.material-burger.material-burger-transformed.up
{
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}

.material-burger.material-burger-transformed.right
{
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}

.material-burger.material-burger-transformed.down
{
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.material-burger.material-burger-transformed span:before
{
  -webkit-transform: translateY(-4px) translateX(6px) rotate(45deg) scaleX(0.6);
  transform: translateY(-4px) translateX(6px) rotate(45deg) scaleX(0.6);
}

.material-burger.material-burger-transformed span:after
{
  -webkit-transform: translateY(4px) translateX(6px) rotate(-45deg) scaleX(0.6);
  transform: translateY(4px) translateX(6px) rotate(-45deg) scaleX(0.6);
}
</style>

<template>
  <v-app>
    <loader></loader>
    <v-layout row wrap>
      <v-flex xs12>
        <stickyHeader></stickyHeader>
      </v-flex>
      <v-flex xs2>
        <sideNavMenu></sideNavMenu>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import stickyHeader from './stickyHeader.vue'
import sideNavMenu from './sideNavMenu.vue'
import loader from './loader.vue'

export default {
  components: {
    stickyHeader,
    sideNavMenu,
    loader
  }
}
</script>

<style>
</style>

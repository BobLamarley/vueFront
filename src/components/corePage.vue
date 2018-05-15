<template>
  <div>
    <td v-for="crypto in overviewCrypto" v-bind:key="crypto.price">
        <li>{{ crypto.symbol }}</li>
        <li>{{ crypto.price }}</li>
    </td>
  </div>
</template>

<script>
export default {
  name: 'corePage',
  created () {
    this.$store.dispatch('crypto/loadOverviewCrypto')
  },
  // be able to get the data
  computed: {
    overviewCrypto () {
      return this.$store.getters['crypto/overviewCrypto']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

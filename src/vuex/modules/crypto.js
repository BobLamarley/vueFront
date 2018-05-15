import axios from 'axios'

const crypto = {
  namespaced: true,
  state: {
    overviewCrypto: [],
    error: ''
  },
  getters: {
    overviewCrypto: state => state.overviewCrypto
  },
  mutations: {
    SET_OVERVIEW_CRYPTO (state, overviewCrypto) {
      state.overviewCrypto = overviewCrypto
    },
    SET_ERROR (state, error) {
      state.error = error
    }
  },
  actions: {
    loadOverviewCrypto ({ commit }) {
      axios
        .get('https://api.binance.com/api/v3/ticker/price')
        .then(r => r.data)
        .then(overviewCrypto => {
          commit('SET_OVERVIEW_CRYPTO', overviewCrypto)
        })
        .catch(function (error) {
          commit('SET_ERROR', error)
        })
    }
  }
}

export default crypto

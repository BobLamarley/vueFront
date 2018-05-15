const loader = {
  state: {
    isLoading: true
  },
  mutations: {
    loading (state) {
      state.isLoading = true
    },
    notLoading (state) {
      state.isLoading = false
    }
  }
}

export default loader

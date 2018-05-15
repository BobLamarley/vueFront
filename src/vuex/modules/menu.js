const menu = {
  state: {
    isMenuOpen: false
  },
  mutations: {
    openMenu (state) {
      state.isMenuOpen = true
    },
    closeMenu (state) {
      state.isMenuOpen = false
    }
  }
}

export default menu

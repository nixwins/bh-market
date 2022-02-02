import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'cart',
    paths: ['cart.products']
  })(store)
}
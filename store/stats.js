export const STATS_MODULE_NAMESPACE = 'stats'
export const NET_INFO = 'netinfo'
export const PRICE = 'price'

export const state = () => ({
  [NET_INFO]: null,
  [PRICE]: null,
})

export const SET_NET_INFO = 'setNetInfo'
export const SET_PRICE = 'setPrice'

export const mutations = {
  [SET_NET_INFO](state, value) {
    state[NET_INFO] = value
  },
  [SET_PRICE](state, value) {
    state[PRICE] = value
  },
}

export const FETCH_NET_INFO = 'loadNetInfo'
export const FETCH_PRICE = 'loadPrice'

export const actions = {
  async [FETCH_NET_INFO]({ commit }) {
    await this.$axios
      .$get('/api/stats/netinfo')
      .then((data) => {
        commit(SET_NET_INFO, data)
      })
      .catch((_) => {})
  },
  async [FETCH_PRICE]({ commit }) {
    await this.$axios
      .$get('/api/stats/price')
      .then((data) => {
        commit(SET_PRICE, data)
      })
      .catch((_) => {})
  },
}

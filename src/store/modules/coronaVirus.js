const state = {
  allAffectedCountries: {
    countries_stat: [],
  },
  worldStats: {},
}

const getters = {
  allAffectedCountries(state) {
    return state.allAffectedCountries.countries_stat.map(
      item => item.country_name
    )
  },
  getWorldStats(state) {
    return state.worldStats
  },
  getAllStatsForCountries(state) {
    return state.allAffectedCountries
  },
}

const actions = {
  setAllAffectedCountries({ commit }, countries) {
    commit('SET_ALL_AFFECTED_COUNTRIES', countries)
  },
  setWorldStats({ commit }, stats) {
    commit('SET_WORLD_STATS', stats)
  },
}

const mutations = {
  SET_ALL_AFFECTED_COUNTRIES(state, allCountries) {
    state.allAffectedCountries = allCountries
  },
  SET_WORLD_STATS(state, worldStats) {
    state.worldStats = worldStats
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}

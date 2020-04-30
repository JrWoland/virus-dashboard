const state = {
  allAffectedCountries: {
    Countries: [],
    Date: '',
  },
  countriesDataset: [],
  worldStats: {},
}

const getters = {
  allAffectedCountries(state) {
    return state.allAffectedCountries.Countries.filter(country => {
      if (country.Country !== '' && country.TotalConfirmed !== 0) {
        return country
      }
    })
  },
  getWorldStats(state) {
    return state.worldStats
  },
  getCountriesDataset() {
    return state.countriesDataset
  },
}

const actions = {
  setAllAffectedCountries({ commit }, countries) {
    commit('SET_ALL_AFFECTED_COUNTRIES', countries)
  },
  setWorldStats({ commit }, stats) {
    commit('SET_WORLD_STATS', stats)
  },
  setCountriesDataset({ commit }, result) {
    commit('SET_COUNTRIES_DATASET', result)
  },
}

const mutations = {
  SET_ALL_AFFECTED_COUNTRIES(state, allCountries) {
    state.allAffectedCountries = allCountries
  },
  SET_WORLD_STATS(state, worldStats) {
    state.worldStats = worldStats
  },
  SET_COUNTRIES_DATASET(state, result) {
    state.countriesDataset = result
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}

const state = {
  allAffectedCountries: [],
}

const getters = {
  allAffectedCountries(state) {
    return state.allAffectedCountries.affected_countries
  },
}

const actions = {
  setAllAffectedCountries({ commit }, countries) {
    commit('SET_ALL_AFFECTED_COUNTRIES', countries)
  },
}
const mutations = {
  SET_ALL_AFFECTED_COUNTRIES(state, allCountries) {
    state.allAffectedCountries = allCountries
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}

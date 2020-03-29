<template>
  <div id="app">
    <HomeDashboard />
    <router-view />
  </div>
</template>

<script>
import CoronaVirusApi from './api/CoronaVirusApi'
import HomeDashboard from './views/HomeDashboard'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    HomeDashboard,
  },
  created() {
    // this.initialData()
  },
  computed: {
    ...mapGetters(['allAffectedCountries']),
  },
  methods: {
    ...mapActions(['setAllAffectedCountries', 'setWorldStats']),
    async initialData() {
      const affectedCountries = await CoronaVirusApi.getCasesByCountry()
      const worldStats = await CoronaVirusApi.getWorldTotalStats()

      this.setAllAffectedCountries(affectedCountries)
      this.setWorldStats(worldStats)
    },
  },
}
</script>

<style lang="scss"></style>

<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="country in allAffectedCountries" :key="country">
          {{ country }}
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import CoronaVirusApi from './api/CoronaVirusApi'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  created() {
    this.initialData()
  },
  computed: {
    ...mapGetters(['allAffectedCountries']),
  },
  methods: {
    ...mapActions(['setAllAffectedCountries']),
    async initialData() {
      const affectedCountries = await CoronaVirusApi.getAllInfectedCountries()
      this.setAllAffectedCountries(affectedCountries)
    },
  },
}
</script>

<style lang="scss"></style>

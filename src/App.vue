<template>
  <el-container id="app">
    <AppCountryList />
    <HomeDashboard />
    <router-view />
  </el-container>
</template>

<script>
import CoronaVirusApi from './api/CoronaVirusApi'
import HomeDashboard from './views/HomeDashboard'
import AppCountryList from './components/AppCountryList'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    HomeDashboard,
    AppCountryList,
  },
  created() {
    this.initialData()
  },
  methods: {
    ...mapActions(['setWorldStats']),
    async initialData() {
      this.setWorldStats(await CoronaVirusApi.getWorldTotalStats())
    },
  },
}
</script>

<style lang="scss"></style>

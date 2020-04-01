<template>
  <el-container id="app">
    <HomeDashboard />
    <router-view />
  </el-container>
</template>

<script>
import CoronaVirusApi from './api/CoronaVirusApi'
import HomeDashboard from './views/HomeDashboard'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    HomeDashboard,
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

<style lang="scss" scoped></style>

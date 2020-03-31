<template>
  <el-container direction="vertical">
    <el-row>
      <AppSlider />
    </el-row>

    <div class="stats">
      <AppInfoBox :title="'New cases'" :value="getWorldStats.new_cases" />
      <AppInfoBox :title="'Total cases'" :value="getWorldStats.total_cases" />
      <AppInfoBox :title="'Deaths'" :value="getWorldStats.new_deaths" />
      <AppInfoBox :title="'Recovered'" :value="getWorldStats.total_recovered" />
    </div>

    <div class="stats-type">
      <el-radio-group v-model="radio">
        <el-radio :label="1">Active cases</el-radio>
        <el-radio :label="2">Total</el-radio>
        <el-radio :label="3">Deaths</el-radio>
        <el-radio :label="4">Recovered</el-radio>
      </el-radio-group>
    </div>
    <div class="stats-type">
      here chart shall be
    </div>
  </el-container>
</template>

<script>
import AppSlider from '../components/AppSlider'
import AppInfoBox from '../components/AppInfoBox'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeDashboard',
  components: {
    AppSlider,
    AppInfoBox,
  },
  data() {
    return {
      radio: 0,
    }
  },
  computed: {
    ...mapGetters(['getWorldStats']),
  },
}
</script>

<style lang="scss">
.stats,
.stats-type {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
}
</style>

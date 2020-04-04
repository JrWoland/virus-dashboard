<template>
  <el-container direction="vertical">
    <el-row>
      <AppSlider />
    </el-row>

    <span>Last update: {{ getWorldStats.statistic_taken_at }}</span>
    <div class="stats">
      <AppInfoBox
        style="color: blueviolet;"
        :title="'Total cases'"
        :value="getWorldStats.total_cases"
      />
      <AppInfoBox
        style="color: crimson;"
        :title="'Deaths'"
        :value="getWorldStats.total_deaths"
      />
      <AppInfoBox
        style="color: green;"
        :title="'Recovered'"
        :value="getWorldStats.total_recovered"
      />
    </div>

    <div class="stats-type">
      <el-radio-group v-model="radio">
        <el-radio :label="1">Active cases</el-radio>
        <el-radio :label="2">Total</el-radio>
        <el-radio :label="3">Deaths</el-radio>
        <el-radio :label="4">Recovered</el-radio>
      </el-radio-group>
    </div>
    <div>
      here chart shall be
      <AppLineChart />
    </div>
  </el-container>
</template>

<script>
import AppSlider from '../components/AppSlider'
import AppInfoBox from '../components/AppInfoBox'
import AppLineChart from '../components/AppLineChart'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeDashboard',
  components: {
    AppSlider,
    AppInfoBox,
    AppLineChart,
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

<style lang="scss" scoped>
.stats,
.stats-type {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
}
</style>

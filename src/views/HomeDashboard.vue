<template>
  <el-container direction="vertical">
    <el-row>
      <AppSlider @slide-event="getValue" />
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
      <AppLineChart
        :dataToDisplay="dataToDisplay"
        :xAxisRange="range"
        :seriesDoDisplay="series"
        :legend="legend"
      />
    </div>
  </el-container>
</template>

<script>
import china from '../mock/china'
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
      sliderValue: null,
      range: china.map(i => i.Date),
      dataToDisplay: [],
      series: [],
      legend: [],
    }
  },
  created() {
    this.setSeriesToDisplay()
    this.setLegendToDisplay()
  },
  computed: {
    ...mapGetters(['getWorldStats', 'getCountriesDataset']),
  },
  watch: {
    sliderValue: function() {
      this.setDataToDisplay()
    },
    getCountriesDataset: function() {
      this.setSeriesToDisplay()
      this.setLegendToDisplay()
      this.setDataToDisplay()
    },
  },
  methods: {
    getValue(e) {
      this.sliderValue = e.value
    },
    mapData(array = []) {
      const index = array.map(i => i.Date).indexOf(this.range[this.sliderValue])
      if (index < 0) {
        return []
      }
      return array
        .slice(0, index)
        .map(item => [item.Date, item.Cases === 0 ? undefined : item.Cases])
    },
    setLegendToDisplay() {
      this.legend = this.getCountriesDataset
        .filter(dataset => dataset.length > 0)
        .map(dataset => dataset[0].Country)
    },
    setSeriesToDisplay() {
      this.series = this.getCountriesDataset
        .filter(dataset => dataset.length > 0)
        .map((dataset, index) => {
          return {
            name: dataset[0].Country,
            type: 'line',
            datasetIndex: index,
          }
        })
    },
    setDataToDisplay() {
      this.dataToDisplay = this.getCountriesDataset.map(dataset => {
        return {
          source: this.mapData(dataset),
        }
      })
    },
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

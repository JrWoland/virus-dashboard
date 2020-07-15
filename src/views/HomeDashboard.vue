<template>
  <el-container class="dashboard-view" direction="vertical">
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
      <AppInfoBox
        style="color: cornflowerblue;"
        :title="'Active Cases'"
        :value="getWorldStats.active_cases"
      />
    </div>

    <div class="dynamic-chart">
      <div class="stats-type">
        <el-radio-group @change="changeDataToDisplay" v-model="radio">
          <el-radio :label="'Active'">Active cases</el-radio>
          <el-radio :label="'Confirmed'">Confirmed</el-radio>
          <el-radio :label="'Deaths'">Deaths</el-radio>
          <el-radio :label="'Recovered'">Recovered</el-radio>
        </el-radio-group>
      </div>
      <div>
        <AppSlider :max="maxSlideValue" @slide-event="getSliderValue" />
      </div>
      <AppLineChart
        :dataToDisplay="dataToDisplay"
        :xAxisRange="range"
        :seriesDoDisplay="series"
        :legend="legend"
        :dimentions="dimentions"
      />
    </div>
    <span>Last update: {{ getWorldStats.statistic_taken_at }}</span>
  </el-container>
</template>

<script>
import AppSlider from '../components/AppSlider'
import AppInfoBox from '../components/AppInfoBox'
import AppLineChart from '../components/AppLineChart'
import { mapGetters } from 'vuex'
import CoronaVirusApi from '../api/CoronaVirusApi'
export default {
  name: 'HomeDashboard',
  components: {
    AppSlider,
    AppInfoBox,
    AppLineChart,
  },
  data() {
    return {
      radio: 'Confirmed',
      baseData: [],
      sliderValue: null,
      maxSlideValue: null,
      range: [],
      dataToDisplay: [],
      dimentions: [],
      series: [],
      legend: [],
    }
  },
  created() {
    this.initialData()
  },
  computed: {
    ...mapGetters(['getWorldStats', 'getCountriesDataset']),
  },
  watch: {
    sliderValue: function() {
      this.setNewValues()
    },
    getCountriesDataset: function() {
      this.changeDataToDisplay(this.radio)
    },
  },
  methods: {
    changeDataToDisplay(e) {
      this.mapAllDatasets(e)
      this.setSeriesToDisplay()
      this.setDataToDisplay(this.baseData)
      this.setDimentions(this.baseData)
    },
    async initialData() {
      const data = await CoronaVirusApi.getHistoryOfAllStatuses('poland')
      this.maxSlideValue = data.length
      this.range = data.map(i => i.Date)
    },
    getSliderValue(e) {
      this.sliderValue = e.value
    },
    setNewValues() {
      const slicedData = this.baseData.slice(0, this.sliderValue)
      this.setDataToDisplay(slicedData)
    },
    setLegendToDisplay() {
      this.legend = this.getCountriesDataset
        .filter(dataset => dataset.length > 0)
        .map(dataset => dataset[0].Country)
    },
    setSeriesToDisplay() {
      this.series = this.getCountriesDataset
        .filter(dataset => dataset.length > 0)
        .map(() => {
          return {
            type: 'line',
            smooth: true,
            symbol: 'none',
          }
        })
    },
    setDimentions(data) {
      this.dimentions = Object.keys(data[0])
    },
    setDataToDisplay(data) {
      this.dataToDisplay = data
    },
    mapAllDatasets(type = this.radio) {
      const base = this.getCountriesDataset[0].map(i => ({ Date: i.Date }))
      this.getCountriesDataset.forEach(country => {
        const propertyCountryName = country[0].Country
        country.forEach(
          (item, index) =>
            (base[index][propertyCountryName] =
              item[type] === 0 ? undefined : item[type])
        )
      })
      this.baseData = base
      return base
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';
.dashboard-view {
  margin: 10px 20px;
}
.stats {
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 10px 0;
  color: cornflowerblue;
}
.stats-type {
  display: flex;
  justify-content: space-around;
}
.dynamic-chart {
  padding: 10px;
  box-shadow: $box-shadow;
}
</style>

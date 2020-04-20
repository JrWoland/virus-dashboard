<template>
  <el-container direction="vertical">
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
    <!-- <button @click="test">test</button> -->
    <el-row>
      <AppSlider @slide-event="getSliderValue" />
    </el-row>
    <div>
      <AppLineChart
        :dataToDisplay="dataToDisplay"
        :xAxisRange="range"
        :seriesDoDisplay="series"
        :legend="legend"
        :dimentions="dimentions"
      />
    </div>
  </el-container>
</template>

<script>
import AppSlider from '../components/AppSlider'
import AppInfoBox from '../components/AppInfoBox'
import AppLineChart from '../components/AppLineChart'
import china from '../mock/china'

// import poland  from '../mock/poland'
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
      baseData: [],
      sliderValue: null,
      range: china.map(i => i.Date),
      dataToDisplay: [],
      dimentions: [],
      series: [],
      legend: [],
    }
  },
  created() {
    // this.setDataToDisplay()
    // this.setSeriesToDisplay()
    // this.setLegendToDisplay()
  },
  computed: {
    ...mapGetters(['getWorldStats', 'getCountriesDataset']),
  },
  watch: {
    sliderValue: function() {
      this.setNewValues()
    },
    getCountriesDataset: function() {
      this.test()
      this.setSeriesToDisplay()
      this.setDataToDisplay(this.baseData)
      this.setDimentions(this.baseData)
    },
  },
  methods: {
    getSliderValue(e) {
      this.sliderValue = e.value
    },
    setNewValues() {
      console.log('zrobił')

      const slicedData = this.baseData.slice(0, this.sliderValue)
      this.setDataToDisplay(slicedData)
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
        .map(() => {
          return {
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
          }
        })
    },
    setDimentions(data) {
      this.dimentions = Object.keys(data[0])
    },
    setDataToDisplay(data) {
      this.dataToDisplay = data
    },
    test() {
      // const dataset = [poland, china]
      const base = this.getCountriesDataset[0].map(i => ({ Date: i.Date }))

      this.getCountriesDataset.forEach(country => {
        const propertyCountryName = country[0].Country
        country.forEach(
          (item, index) =>
            (base[index][propertyCountryName] =
              item.Cases === 0 ? undefined : item.Cases)
        )
      })
      this.baseData = base
      return base
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

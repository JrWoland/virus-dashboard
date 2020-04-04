<template>
  <div class="container">
    <div class="app-line-chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import poland from '../mock/poland'
import china from '../mock/china'
// require('echarts/theme/macarons')
export default {
  name: 'AppLineChart',
  data() {
    return {
      chart: undefined,
      range: china.map(i => i.Date),
      currentDate: 0,
      dataToDisplay: [
        ['day', 'China', 'Poland'],
        ['2020-01-22T00:00:00Z', 43.3, 0],
        ['2020-01-23T00:00:00Z', 83.1, 0],
        ['2020-01-24T00:00:00Z', 86.4, 65.2],
        ['2020-01-25T00:00:00Z', 172.4, 53.9],
        ['2020-01-26T00:00:00Z', 272.4, 153.9],
        ['2020-01-27T00:00:00Z', 472.4, 453.9],
        ['2020-01-28T00:00:00Z', 572.4, 653.9],
        ['2020-01-29T00:00:00Z', 572.4, 953.9],
        ['2020-01-30T00:00:00Z', 672.4, 1253.9],
        ['2020-01-31T00:00:00Z', 872.4, 1553.9],
        ['2020-02-01T00:00:00Z', 972.4, 1753.9],
        ['2020-02-02T00:00:00Z', 1172.4, 1853.9],
        ['2020-02-03T00:00:00Z', 7872.4, 2453.9],
        ['2020-02-04T00:00:00Z', 9472.4, 2453.9],
      ],
      options1: {
        title: {
          text: 'ECharts entry example',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['China', 'Poland'],
        },
        xAxis: {
          data: china.map(item => item.Date),
        },
        yAxis: {
          min: 0,
          max: 10000,
        },
        series: [
          {
            name: 'China',
            type: 'line',
            data: china.map(item => item.Cases),
          },
          {
            name: 'Poland',
            type: 'line',
            data: poland.map(item => item.Cases),
          },
        ],
      },
    }
  },
  methods: {
    splitter(array = []) {
      const index = array.map(i => i.Date).indexOf(this.range[this.currentDate])
      if (index < 0) {
        return []
      }
      return array.slice(0, index).map(item => [item.Date, item.Cases])
    },
    initChart() {
      this.chart = echarts.init(document.querySelector('.app-line-chart'))
      this.chart.setOption({
        animation: false,
        title: {
          text: 'Dataset',
        },
        legend: {
          data: ['China', 'Poland'],
        },
        tooltip: {
          trigger: 'axis',
        },
        dataset: [
          {
            source: this.splitter(china),
          },
          {
            source: this.splitter(poland),
          },
        ],
        xAxis: {
          data: this.range,
          type: 'category',
          min: china[0].Date,
          max: china.pop().Date,
        },
        yAxis: {
          min: 0,
        },
        series: [
          {
            type: 'line',
            datasetIndex: 0,
          },
          {
            type: 'line',
            datasetIndex: 1,
          },
        ],
      })
    },
  },
  mounted() {
    this.initChart()
  },
  watch: {
    currentDate: function(newRange, oldRange) {
      console.log(newRange, oldRange)
      this.chart.setOption({
        dataset: [
          {
            source: this.splitter(china),
          },
          {
            source: this.splitter(poland),
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-line-chart {
  width: 100%;
  height: 400px;
  padding: 10px;
}
</style>

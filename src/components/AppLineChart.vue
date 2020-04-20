<template>
  <div class="container">
    <div class="app-line-chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
// import china from '../mock/china'
// import poland from '../mock/poland'
export default {
  name: 'AppLineChart',
  data() {
    return {
      chart: undefined,
    }
  },
  props: {
    dataToDisplay: {
      type: Array,
      default: () => [],
    },
    dimentions: {
      type: Array,
      default: () => [],
    },
    yAxisMax: {
      type: Number,
      default: null,
    },
    xAxisRange: {
      type: Array,
      default: () => [],
    },
    legend: {
      type: Array,
      default: () => [],
    },
    seriesDoDisplay: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.querySelector('.app-line-chart'))
      this.chart.setOption({
        animation: false,
        title: {
          text: 'Dataset',
        },
        // legend: {
        //   data: ['China'],
        // },
        tooltip: {
          trigger: 'axis',
        },
        dataset: {
          dimensions: this.dimentions,
          source: this.dataToDisplay,
        },
        xAxis: {
          data: this.xAxisRange,
          type: 'category',
        },
        yAxis: {
          min: 0,
          max: 100000,
        },
        series: this.seriesDoDisplay,
      })
    },
  },
  mounted() {
    this.initChart()
  },
  watch: {
    dataToDisplay: function() {
      this.chart.setOption({
        dataset: {
          dimensions: this.dimentions,
          source: this.dataToDisplay,
        },
        series: this.seriesDoDisplay,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-line-chart {
  width: 100%;
  height: 500px;
  padding: 10px;
}
</style>

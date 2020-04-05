<template>
  <div class="container">
    <div class="app-line-chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
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
    currentDate: {
      type: Number,
      default: 50,
    },
    yAxisMax: {
      type: Number,
      default: 100000,
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
        legend: {
          data: this.legend,
        },
        tooltip: {
          trigger: 'axis',
        },
        dataset: this.dataToDisplay,
        xAxis: {
          data: this.xAxisRange,
          type: 'category',
          // min: '2020-01-22T00:00:00Z',
          // max: '2020-04-03T00:00:00Z',
        },
        yAxis: {
          max: this.yAxisMax,
          min: 0,
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
        dataset: this.dataToDisplay,
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

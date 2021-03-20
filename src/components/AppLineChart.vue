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
    renderChart() {
      this.chart = echarts.init(document.querySelector('.app-line-chart'))
      this.chart.setOption({
        animation: false,
        title: {
          text: 'Countries',
        },
        legend: {
          show: true,
          data: this.legend,
        },
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
        },
        series: this.seriesDoDisplay,
      })
    },
  },
  mounted() {
    this.renderChart()
  },
  watch: {
    dataToDisplay: function() {
      this.renderChart()
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

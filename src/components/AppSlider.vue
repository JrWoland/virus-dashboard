<template>
  <div class="app-slider">
    <el-slider
      :max="max"
      v-model="valueSlide"
      :format-tooltip="formatTooltip"
      show-input
    ></el-slider>
    <input @input="debounceInput" type="range" />
    <span class="demonstration">Default value</span>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  name: 'AppSlider',
  data() {
    return {
      valueSlide: this.value,
    }
  },
  props: {
    max: {
      type: Number,
      default: 76,
    },
    value: {
      type: Number,
      default: 0,
    },
    dataset: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatTooltip(val) {
      return this.dataset[val]
    },
    debounceInput(e) {
      console.log(e)
      // _.debounce(function(e) {
      // }, 2000)
    },
    do() {
      this.$emit('slide-event', {
        day: this.dataset[this.valueSlide],
        value: this.valueSlide,
      })
    },
  },
  watch: {
    valueSlide: debounce(function(newVal) {
      console.log(newVal)
      this.do()
    }, 100),
  },
}
</script>

<style lang="scss" scoped>
.app-slider {
  width: 50%;
  padding: 0 20px;
}
</style>

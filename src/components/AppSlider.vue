<template>
  <div class="app-slider">
    <el-slider
      :max="max"
      v-model="valueSlide"
      :format-tooltip="formatTooltip"
      show-input
    ></el-slider>
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
      default: 90,
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
    emitValue() {
      this.$emit('slide-event', {
        day: this.dataset[this.valueSlide],
        value: this.valueSlide,
      })
    },
  },
  watch: {
    valueSlide: debounce(function() {
      this.emitValue()
    }, 5),
  },
}
</script>

<style lang="scss" scoped>
.app-slider {
  width: 100%;
  padding: 0 20px;
}
</style>

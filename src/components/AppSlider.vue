<template>
  <div class="app-slider">
    <el-slider
      :max="max"
      v-model="valueSlide"
      :format-tooltip="formatTooltip"
      show-input
      debounce="300"
    ></el-slider>
    <span class="demonstration">Default value</span>
  </div>
</template>

<script>
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
      default: 74,
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
  },
  watch: {
    valueSlide: function() {
      this.$emit('slide-event', {
        day: this.dataset[this.valueSlide],
        value: this.valueSlide,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-slider {
  width: 50%;
  padding: 0 20px;
}
</style>

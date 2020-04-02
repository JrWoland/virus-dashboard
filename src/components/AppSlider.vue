<template>
  <div class="app-slider">
    <el-slider :max="1000" v-model="date"></el-slider>
    <span class="demonstration">Default value</span>
  </div>
</template>

<script>
export default {
  name: 'AppSlider',
  data() {
    return {
      date: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.app-slider {
  padding: 0 20px;
}
</style>

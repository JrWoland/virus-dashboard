<template>
  <div class="block">
    <el-slider v-model="date"></el-slider>
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

<style lang="scss" scoped></style>

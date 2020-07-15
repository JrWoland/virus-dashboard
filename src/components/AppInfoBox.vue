<template>
  <div class="info-card">
    <p class="info-card__title">{{ title }}</p>
    <el-row v-loading="!value" class="info-card__value">{{ value }}</el-row>
  </div>
</template>

<script>
export default {
  name: 'AppInfoBox',
  props: {
    value: String,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';
.info-card {
  height: 100px;
  box-shadow: $box-shadow;
  text-align: center;
  &__title {
    margin: 10px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__value {
    margin: 10px;
    font-size: 24px;
    text-transform: uppercase;
  }
}
</style>

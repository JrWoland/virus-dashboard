<template>
  <div class="info-card">
    <p class="info-card__title">{{ title }}</p>
    <p class="info-card__value">{{ value || 2134214 }}</p>
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
.info-card {
  width: 200px;
  box-shadow: 4px 4px 7px 2px rgba(0, 0, 0, 0.081);
  border-radius: 10px;
  text-align: center;
  &__title {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__value {
    font-size: 24px;
    text-transform: uppercase;
  }
}
</style>

<template>
  <div class="info">
    <div class="info-card">
      <p class="info-card__title">New cases</p>
      <p class="info-card__value">{{ getWorldStats.new_cases }} 123</p>
    </div>
    <div class="info-card">
      <p class="info-card__title">Total cases</p>
      <p class="info-card__value">{{ getWorldStats.total_cases }} 1245</p>
    </div>
    <div class="info-card">
      <p class="info-card__title">Deaths</p>
      <p class="info-card__value">{{ getWorldStats.total_deaths }} 123</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeDashboard',
  computed: {
    ...mapGetters(['getWorldStats']),
  },
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
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

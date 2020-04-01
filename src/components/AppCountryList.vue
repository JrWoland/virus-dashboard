<template>
  <el-container direction="vertical" class="country-list">
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >Check all</el-checkbox
    >
    <el-checkbox-group
      v-model="checkedCountries"
      @change="handleCheckedCountriesChange"
    >
      <el-checkbox
        v-for="country in allAffectedCountries"
        :label="country.Country"
        :key="country.Country"
        >{{ country.Country }}</el-checkbox
      >
    </el-checkbox-group>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CoronaVirusApi from '../api/CoronaVirusApi'
export default {
  name: 'AppCountryList',
  data() {
    return {
      checkAll: false,
      checkedCountries: [],
      isIndeterminate: true,
    }
  },
  computed: {
    ...mapGetters(['allAffectedCountries']),
  },
  methods: {
    ...mapActions(['setAllAffectedCountries']),
    async getAffectedCountryList() {
      this.setAllAffectedCountries(
        await CoronaVirusApi.getLatestCasesForContries()
      )
    },
    handleCheckAllChange(val) {
      this.checkedCountries = val
        ? this.allAffectedCountries.map(item => item.Country)
        : []
      this.isIndeterminate = false
    },
    handleCheckedCountriesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.allAffectedCountries.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.allAffectedCountries.length
    },
  },
  mounted() {
    this.getAffectedCountryList()
  },
}
</script>

<style lang="scss" scoped>
.el-container {
  max-height: 100vh;
}
.el-checkbox-group {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>

<template>
  <el-container v-loading="isLoading" direction="vertical" class="country-list">
    <el-checkbox
      class="check-all"
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
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters(['allAffectedCountries']),
  },
  methods: {
    ...mapActions(['setAllAffectedCountries']),
    async getAffectedCountryList() {
      this.isLoading = true
      this.setAllAffectedCountries(
        await CoronaVirusApi.getLatestCasesForContries()
      )
      this.isLoading = false
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
    // this.getAffectedCountryList()
  },
}
</script>

<style lang="scss" scoped>
.el-container {
  padding: 0px 5px 0px;
  height: 100vh;
  max-width: 300px;
  .check-all {
    border-bottom: 1px solid #ddd;
    font-weight: bold;
  }
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
}
</style>

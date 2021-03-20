<template>
  <el-aside v-loading="isLoading" class="country-list">
    <el-input size="mini" placeholder="search country" v-model="input" />
    <div class="country-list__options">
      <el-button
        class="country-list__download-button"
        size="mini"
        type="primary"
        @click="getDataForCheckedCountries"
        >Download data
      </el-button>
    </div>
    <el-checkbox-group
      class="country-list__checkbox-group"
      v-model="checkedCountries"
      @change="handleCheckedCountriesChange"
    >
      <el-checkbox
        class="country-list__checkbox-item"
        v-for="country in countryList"
        :label="country.Slug"
        :key="country.Country"
      >
        <el-tag size="mini">{{ country.TotalConfirmed }}</el-tag>
        {{ country.Country }}
      </el-checkbox>
    </el-checkbox-group>
  </el-aside>
</template>

<script>
import { sortObjectsBy } from '../scripts/SortingScript.js'
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
      input: '',
    }
  },
  computed: {
    ...mapGetters(['allAffectedCountries']),
    countryList: function() {
      return [...this.allAffectedCountries].sort(
        sortObjectsBy('TotalConfirmed', 'desc')
      )
    },
    filteredCountryList: function() {
      return this.countryList.filter(
        country => country.Country.toLowerCase() === this.input.toLowerCase()
      )
    },
  },
  methods: {
    ...mapActions(['setAllAffectedCountries', 'setCountriesDataset']),
    async getDataForCheckedCountries() {
      this.isLoading = true
      const arrayOfPromises = []
      this.checkedCountries.forEach(country => {
        arrayOfPromises.push(CoronaVirusApi.getHistoryOfAllStatuses(country))
      })
      const result = await Promise.all(arrayOfPromises)
      this.setCountriesDataset(result)
      this.isLoading = false
    },
    async getAffectedCountryList() {
      this.isLoading = true
      this.setAllAffectedCountries(
        await CoronaVirusApi.getLatestCasesForContries()
      )
      this.isLoading = false
    },
    handleCheckedCountriesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.allAffectedCountries.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.allAffectedCountries.length
    },

    handleSearch() {},
  },
  created() {
    this.getAffectedCountryList()
  },
}
</script>

<style lang="scss" scoped>
.country-list {
  display: flex;
  flex-direction: column;
  padding: 5px;
  max-width: 300px;
  height: 100vh;
  &__options {
    height: 50px;
  }
  &__check-all {
    border-bottom: 1px solid #ddd;
    font-weight: bold;
  }
  &__checkbox-group {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
    overflow: auto;
  }
  &__checkbox-item {
    margin: 2px 0;
  }
  &__download-button {
    width: 100%;
  }
}
</style>

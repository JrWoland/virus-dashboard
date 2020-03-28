<template>
  <div id="app">
    <div>
      <button @click="getData">
        get Data
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import CoronaVirusApi from './api/CoronaVirusApi'
export default {
  name: 'App',
  methods: {
    async getData() {
      const data = await CoronaVirusApi.getAllInfectedCountries()
      console.log(CoronaVirusApi.headers, 'private')

      console.log(data)
    },
  },
}
</script>

<style lang="scss"></style>

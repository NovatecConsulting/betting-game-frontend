<template>
  <div class="standings main-content min-w-screen p-4 sm:px-16 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-2xl mx-auto">
      <StandingsTable />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { Component, Vue } from 'vue-property-decorator'
import StandingsTable from '../components/StandingsTable.vue'

@Component({
  components: { StandingsTable }
})
export default class Standings extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

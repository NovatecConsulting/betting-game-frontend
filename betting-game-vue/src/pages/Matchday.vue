<template>
  <div class="matchday main-content min-w-screen p-4 sm:px-16 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-2xl mx-auto">
      <MatchdayChooser class="mb-4" />

      <MatchdayTable />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { Component, Vue } from 'vue-property-decorator'
import MatchdayTable from '../components/MatchdayTable.vue'
import MatchdayChooser from '../components/MatchdayChooser.vue'

@Component({
  components: { MatchdayTable, MatchdayChooser }
})
export default class Matchday extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

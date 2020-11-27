<template>
  <div class="max-w-3xl h-10 px-6 mx-0 sm:mx-3 bg-white dark:bg-gray-900 rounded-md shadow-sm">
    <select
      class="mt-2 w-full dark:bg-gray-900 text-gray-700 dark:text-gray-300"
      v-if="matchdayOverView !== null"
      v-model="selectedMatchday"
    >
      <option v-for="matchday of matchdayOverView.matchDays" :key="matchday.id" :value="matchday.id">{{
        matchday.name
      }}</option>
    </select>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { Component, Vue } from 'vue-property-decorator'
import { vxm } from '../store/store.vuex'
import MatchdayOverview from '../models/MatchdayOverview'
import Matchday from '../models/Matchday'
import { OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON, MATCHDAY_GET_SPECIFIC } from '../store/actions'

@Component
export default class MatchdayChooser extends Vue {
  options = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  matchdayOverviewStore = vxm.matchdayOverviewStore

  mounted() {
    this.$store.dispatch(OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON)
  }

  get matchdayOverView(): MatchdayOverview | null {
    return this.matchdayOverviewStore.getMatchdayOverview
  }

  set selectedMatchday(matchdayId: number) {
    this.$store.dispatch(MATCHDAY_GET_SPECIFIC, { year: 2020, matchday: matchdayId })
  }

  get selectedMatchday() {
    if (this.matchdayOverviewStore.matchdayOverview) {
      return this.matchdayOverviewStore.matchdayOverview.current
    } else {
      return 1
    }
  }
}
</script>

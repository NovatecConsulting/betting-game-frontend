<template>
  <div class="max-w-3xl h-10 px-6 mx-0 sm:mx-3 bg-white dark:bg-gray-900 rounded-md shadow-sm">
    <select
      class="mt-2 w-full dark:bg-gray-900 text-gray-700 dark:text-gray-300"
      v-if="matchdayOverview !== null"
      v-model="selectedMatchday"
    >
      <option v-for="matchday of matchdayOverview.matchDays" :key="matchday.id" :value="matchday.id">
        {{ matchday.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { Component, Vue } from 'vue-property-decorator'
import { vxm } from '../store/store.vuex'
import MatchdayOverview from '../models/MatchdayOverview'
import { OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON, MATCHDAY_GET_SPECIFIC } from '../store/actions'

@Component
export default class MatchdayChooser extends Vue {
  matchdayOverviewStore = vxm.matchdayOverviewStore

  mounted() {
    this.$store.dispatch(`matchdayOverview/${OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON}`)
  }

  get matchdayOverview(): MatchdayOverview | null {
    return this.matchdayOverviewStore.matchdayOverview
  }

  set selectedMatchday(matchdayId: number) {
    this.$store.dispatch(`matchday/${MATCHDAY_GET_SPECIFIC}`, { year: 2020, matchday: matchdayId })
  }

  get selectedMatchday() {
    if (vxm.matchdayStore.matchday) {
      return vxm.matchdayStore.matchday.id
    } else {
      if (this.matchdayOverview) {
        return this.matchdayOverview.current
      } else {
        return 1
      }
    }
  }
}
</script>

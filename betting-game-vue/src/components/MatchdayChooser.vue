<template>
  <div class="max-w-3xl h-10 px-6 mx-0 sm:mx-3 bg-white dark:bg-gray-900 rounded-md">
    <select class="mt-2 w-full dark:bg-gray-900 text-gray-700 dark:text-gray-300" v-if="matchdayOverView !== null">
      <option v-for="opt of matchdayOverView.matchDays" :key="opt.id" :value="opt">{{ opt.name }}</option>
    </select>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { Component, Vue } from 'vue-property-decorator'
import { vxm } from '../store/store.vuex'
import MatchdayOverview from '../models/MatchdayOverview'
import { OVERVIEW_GET_ALL_MATCHES } from '../store/actions'

@Component
export default class MatchdayChooser extends Vue {
  options = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  matchdayOverviewStore = vxm.matchdayOverviewStore

  mounted() {
    this.$store.dispatch(OVERVIEW_GET_ALL_MATCHES)
  }
  get matchdayOverView(): MatchdayOverview | null {
    return this.matchdayOverviewStore.getMatchdayOverview
  }
}
</script>

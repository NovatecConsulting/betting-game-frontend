<template>
  <div class="matchday">
    <!-- MATCHDAY SKELETON TABLE, DISPLAYED WHILE MATCHDAY IS LOADING -->
    <div
      class="inline-block shadow-lg rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-900"
      v-if="matchdayIsLoading"
    >
      <table class="leading-normal table-auto w-full md:max-w-lg mx-auto bg-white">
        <thead>
          <tr>
            <th
              colspan="4"
              class="px-8 py-5 border-b-2 border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-900 text-left text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
            >
              Matchday
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="match in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
            :key="match"
            class="matchday__row cursor-pointer bg-white dark:bg-gray-900"
          >
            <td class="matchday__col animate-pulse" colspan="3">
              <div class="matchday__match flex flex-col md:flex-row">
                <div class="matchday__team-home flex items-center w-48 md:w-64">
                  <div class="flex-shrink-0 w-10 h-10">
                    <div class="rounded-full bg-gray-400 dark:bg-gray-600 h-10 w-10"></div>
                  </div>
                  <div class="flex-1 space-y-4 py-1">
                    <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-32"></div>
                  </div>
                </div>

                <div class="matchday__team-guest flex items-center mt-2 md:mt-0 w-48 md:w-64">
                  <div class="flex-shrink-0 w-10 h-10">
                    <div class="rounded-full bg-gray-400 dark:bg-gray-600 h-10 w-10"></div>
                  </div>
                  <div class="flex-1 space-y-4 py-1">
                    <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-32"></div>
                  </div>
                </div>
              </div>
            </td>
            <td class="matchday__time-score matchday__col animate-pulse" colspan="1">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-4 bg-gray-400 dark:bg-gray-600 rounded w-16 md:w-14"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MATCHDAY TABLE -->
    <div class="inline-block shadow-lg rounded-lg overflow-hidden" v-else>
      <table class="leading-normal table-auto max-w-lg mx-auto">
        <thead>
          <tr>
            <th
              colspan="3"
              class="pl-6 py-5 border-b-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-left text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
            >
              {{ matchday.name }}:
              {{ matchday.firstMatchStartDateTime | dateTime }}
              -
              {{ matchday.lastMatchStartDateTime | dateTime }}
            </th>
            <th
              colspan="1"
              class="px-6 py-5 border-b-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-left text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
            >
              <button
                class="float-right cursor-pointer"
                :class="{ 'animate-spin': matchdayIsLoading }"
                @click="getMatchday()"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </button>
            </th>
          </tr>
        </thead>

        <MatchRow v-for="(match, index) in matchday.matches" :key="match.id" :match="match" :index="index" />
      </table>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { Component, Vue } from 'vue-property-decorator'
import Matchday from '../models/Matchday'
import MatchRow from '../components/MatchRow.vue'
import { vxm } from '../store/store.vuex'
import { MATCHDAY_GET_CURRENT, MATCHDAY_GET_SPECIFIC } from '../store/actions'

@Component({
  components: { MatchRow }
})
export default class MatchdayTable extends Vue {
  matchdayStore = vxm.matchdayStore

  created() {
    this.$store.dispatch(MATCHDAY_GET_CURRENT)
  }

  getMatchday() {
    this.$store.dispatch(MATCHDAY_GET_SPECIFIC, {
      year: 2020,
      matchday: vxm.matchdayStore.getMatchday.id
    })
  }

  get matchday(): Matchday | null {
    return this.matchdayStore.getMatchday
  }
  get matchdayIsLoading(): boolean {
    return this.matchdayStore.isLoading
  }
}
</script>

<style scoped>
.matchday__col {
  @apply px-7 md:px-5 py-4 border-b-2 border-gray-200 dark:border-gray-800 text-sm;
}
</style>

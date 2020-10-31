<template>
  <!-- TODO MOBILE VIEW -->
  <div class="matchday min-w-sm max-w-3xl">
    <div class="matchday__loading" v-if="!matchday">Loading</div>
    <div class="px-4 sm:px-8 py-4 overflow-x-auto" v-else>
      <div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
        <table class="matchday__table leading-normal w-full table-auto">
          <thead>
            <tr>
              <th
                colspan="4"
                class="px-8 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
              >
                {{ matchday.name }}:
                {{ matchday.firstMatchStartDateTime | dateTime }}
                -
                {{ matchday.lastMatchStartDateTime | dateTime }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="match in matchday.matches"
              :key="match.id"
              class="matchday__row hover:bg-gray-100 cursor-pointer"
            >
              <td class="matchday__row-item">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-full h-full rounded-full" :src="match.home.logo" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ match.home.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="matchday__row-item">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-full h-full rounded-full" :src="match.guest.logo" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ match.guest.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="matchday__row-item" :class="{ 'text-base font-bold': match.result }">
                <p class="text-gray-900">
                  <span v-if="match.result">{{
                    match.result.final.goalsHome + ' : ' + match.result.final.goalsGuest
                  }}</span>
                  <span v-else>{{ match.kickOffDateTime | dateTime }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import Matchday from '../models/Matchday'
import { vxm } from '../store/store.vuex'

@Component({})
export default class MatchdayTable extends Vue {
  matchdayStore = vxm.matchdayStore
  created() {
    this.$store.dispatch('getCurrentMatchday')
  }
  get matchday(): Matchday | null {
    return this.matchdayStore.currentMatchday
  }
}
</script>

<style scoped>
.matchday__row-item {
  @apply px-5 py-4 border-b border-gray-200 text-sm;
}
</style>

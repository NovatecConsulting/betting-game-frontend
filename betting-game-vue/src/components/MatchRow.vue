<template>
  <tbody>
    <tr
      class="match__row bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
      @click="toggleBetting()"
    >
      <td class="match__col" colspan="2" :class="{ 'border-none': index == 8 }">
        <div class="match__match flex flex-col md:flex-row truncate">
          <div class="match__team-home flex items-center w-32 md:w-64 ">
            <div class="flex-shrink-0 w-10 h-10">
              <img class="w-full h-full rounded-full" :src="match.home.logo" alt="" />
            </div>
            <div class="ml-3">
              <p class="whitespace-no-wrap">
                {{ match.home.name }}
              </p>
            </div>
          </div>

          <div class="match__team-guest flex items-center mt-2 md:mt-0">
            <div class="flex-shrink-0 w-10 h-10">
              <img class="w-full h-full rounded-full" :src="match.guest.logo" alt="" />
            </div>
            <div class="ml-3">
              <p class="whitespace-no-wrap">
                {{ match.guest.name }}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td
        class="match__time-score match__col"
        :class="({ 'text-base font-bold': match.result }, { 'border-none': index == 8 })"
      >
        <div class="font-bold flex flex-col md:flex-row" v-if="match.result">
          <div class="match__time-score--home">
            {{ match.result.final.goalsHome }}
          </div>
          <div class="m-1 mt-0 h-4"><span class="hidden md:block">:</span></div>
          <div class="match__time-score--guest">
            {{ match.result.final.goalsGuest }}
          </div>
        </div>
        <span v-else>{{ match.kickOffDateTime | dateTime }}</span>
      </td>
    </tr>
    <transition name="fade" mode="in-out">
      <tr class="h-16 bg-gray-100 text-gray-800 text-sm" v-show="displayBetting">
        <th colspan="3" v-if="displayBettingContent" class="match__bet">PLACEHOLDER FOR BET</th>
      </tr>
    </transition>
  </tbody>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import Match from '../models/Match'
import { vxm } from '../store/store.vuex'

@Component
export default class MatchRowComponent extends Vue {
  @Prop() readonly match: Match | undefined
  @Prop() readonly index?: Number

  displayBetting = false
  displayBettingContent = false

  get userIsLoggedIn() {
    return vxm.user.isLoggedIn
  }
  toggleBetting() {
    if (this.userIsLoggedIn && this.match?.result == null) {
      this.displayBetting = !this.displayBetting
      if (!this.displayBettingContent) {
        setTimeout(() => {
          this.toggleBettingContent()
        }, 200)
      } else {
        this.toggleBettingContent()
      }
    }
  }

  toggleBettingContent() {
    this.displayBettingContent = !this.displayBettingContent
  }
}
</script>
<style scoped>
.match__col {
  @apply px-5 py-4 border-b-2 border-gray-100 dark:border-gray-800 text-sm;
}
.fade-enter-active,
.fade-leave-active {
  height: 4rem;
  transition: all 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  height: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
</style>

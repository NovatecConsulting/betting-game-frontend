<template>
  <div class="standings">
    <div class="col-span-2 md:col-span-12, standings__col">Standings</div>

    <div class="grid grid-cols-12 gap-4 tableHeaders__col">
      <div class="col-span-1">#</div>
      <div class="col-span-1"></div>
      <div class="col-span-3">Team</div>
      <div class="col-span-1">MP</div>
      <div class="col-span-1">W</div>
      <div class="col-span-1">D</div>
      <div class="col-span-1">L</div>
      <div class="col-span-2">G</div>
      <div class="col-span-1">PTS</div>
    </div>

    <template v-if="teamStandings.length > 0">
      <div :key="index" class="grid grid-cols-12 gap-4 tableStandings__col" v-for="(standing, index) in teamStandings">
        <div class="col-span-1">{{ index + 1 }}</div>
        <div class="col-span-1">
          <img class="team__logo" :src="standing.logo" alt="teamLogo" />
        </div>
        <div class="col-span-3 team__name">
          {{ standing.name }}
        </div>
        <div class="col-span-1">{{ standing.matches }}</div>
        <div class="col-span-1">{{ standing.won }}</div>
        <div class="col-span-1">{{ standing.draw }}</div>
        <div class="col-span-1">{{ standing.lost }}</div>
        <div class="col-span-2">{{ standing.goals }} : {{ standing.opponentGoals }}</div>
        <div class="col-span-1">{{ standing.points }}</div>
      </div>
    </template>
    <template v-else>
      <div :key="index" class="grid grid-cols-12 gap-4 tableStandings__col animate-pulse" v-for="index in 18">
        <div class="col-span-1">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-6"></div>
        </div>
        <div class="col-span-4">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-48"></div>
        </div>
        <div class="col-span-1">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-6"></div>
        </div>
        <div class="col-span-1">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-6"></div>
        </div>
        <div class="col-span-1">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-6"></div>
        </div>
        <div class="col-span-1">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-6"></div>
        </div>

        <div class="col-span-2">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-15"></div>
        </div>

        <div class="col-span-1">
          <div class="ml-3 h-4 bg-gray-400 dark:bg-gray-600 rounded w-6"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { vxm } from '@/store/store.vuex'
import { TEAMSTANDING_GET_CURRENT } from '@/store/actions'
// eslint-disable-next-line no-unused-vars
import { TeamStandings } from '@/models/TeamStandings'
import Component from 'vue-class-component'

@Component
export default class StandingsTable extends Vue {
  teamStandingStore = vxm.teamStandingsStore

  mounted() {
    this.$store.dispatch(`teamStanding/${TEAMSTANDING_GET_CURRENT}`)
  }

  get teamStandings(): TeamStandings {
    return this.teamStandingStore.teamStandings
  }
}
</script>

<style scoped>
.standings__col {
  @apply px-8 py-5 border-b-2 border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-900 text-left text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider;
}

.tableHeaders__col {
  @apply border-b-2 font-semibold bg-gray-300;
}

.tableStandings__col {
  @apply py-1 border-b-2 border-gray-200 dark:border-gray-800 text-sm;
}

.team__name {
  text-align: left;
}

.team__logo {
  @apply max-h-5 float-left ml-1.5;
}
</style>

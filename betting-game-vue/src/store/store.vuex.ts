import { createProxy, extractVuexModule } from 'vuex-class-component'
import { ThemeStore } from './modules/theme.store'
import { UserStore } from './modules/user.store'
import { MatchdayStore } from './modules/matchday.store'
import { MatchdayOverviewStore } from './modules/matchdayOverview.store'
import { TeamStandingsStore } from '@/store/modules/teamStandings.store'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(ThemeStore),
    ...extractVuexModule(UserStore),
    ...extractVuexModule(MatchdayStore),
    ...extractVuexModule(MatchdayOverviewStore),
    ...extractVuexModule(TeamStandingsStore)
  }
})

export const vxm = {
  theme: createProxy(store, ThemeStore),
  user: createProxy(store, UserStore),
  matchdayStore: createProxy(store, MatchdayStore),
  matchdayOverviewStore: createProxy(store, MatchdayOverviewStore),
  teamStandingsStore: createProxy(store, TeamStandingsStore)
}

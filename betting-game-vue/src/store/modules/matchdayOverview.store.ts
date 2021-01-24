import { createModule, mutation, action, getter } from 'vuex-class-component'
import MatchdayOverview from '@/models/MatchdayOverview'
import http from '@/utils/Http'
import {
  OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON,
  OVERVIEW_GET_ALL_MATCHES_SPECIFIC_SEASON,
  OVERVIEW_FETCH_DATA_PENDING,
  OVERVIEW_FETCH_DATA_ERROR,
  OVERVIEW_FETCH_DATA_SUCCESS
} from '../actions'

const VuexModule = createModule({
  namespaced: 'matchdayOverview',
  strict: false
})

export class MatchdayOverviewStore extends VuexModule {
  matchdayOverview: MatchdayOverview | null = null
  matchdayOverviewIsLoading: boolean = true
  matchdayOverviewHasError: boolean = false
  matchdayOverviewErrorMsg?: string;

  @mutation [OVERVIEW_FETCH_DATA_PENDING](): void {
    this.matchdayOverviewIsLoading = true
    this.matchdayOverviewHasError = false
  }

  @mutation [OVERVIEW_FETCH_DATA_SUCCESS](payload: MatchdayOverview): void {
    this.matchdayOverviewIsLoading = false
    this.matchdayOverviewHasError = false
    this.matchdayOverview = payload
  }
  @mutation [OVERVIEW_FETCH_DATA_ERROR](payload: string): void {
    this.matchdayOverviewIsLoading = false
    this.matchdayOverviewHasError = true
    this.matchdayOverviewErrorMsg = payload
  }

  @action async [OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON]() {
    this[OVERVIEW_FETCH_DATA_PENDING]()
    try {
      const response = await http.get('/matchdays/current-season')
      this[OVERVIEW_FETCH_DATA_SUCCESS](response.data)
    } catch (error) {
      this[OVERVIEW_FETCH_DATA_ERROR](error.message)
    }
  }

  @action async [OVERVIEW_GET_ALL_MATCHES_SPECIFIC_SEASON](season: string) {
    this[OVERVIEW_FETCH_DATA_PENDING]()
    try {
      const response = await http.get(`/matchdays/${season}`)
      this[OVERVIEW_FETCH_DATA_SUCCESS](response.data)
    } catch (error) {
      this[OVERVIEW_FETCH_DATA_ERROR](error.message)
    }
  }
}

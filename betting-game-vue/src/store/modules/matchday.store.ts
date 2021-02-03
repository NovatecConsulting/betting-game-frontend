import { createModule, mutation, action, getter } from 'vuex-class-component'
import Matchday from '@/models/Matchday'
import http from '@/utils/Http'
import {
  MATCHDAY_GET_CURRENT,
  MATCHDAY_GET_SPECIFIC,
  MATCHDAY_FETCH_DATA_PENDING,
  MATCHDAY_FETCH_DATA_ERROR,
  MATCHDAY_FETCH_DATA_SUCCESS
} from '../actions'
type MatchdayProps = { year: string; matchday: string }

const VuexModule = createModule({
  namespaced: 'matchday',
  strict: false
})

export class MatchdayStore extends VuexModule {
  matchday: Matchday | null = null
  matchdayIsLoading: boolean = true
  matchdayHasError: boolean = false
  matchdayErrorMsg?: string;

  @mutation [MATCHDAY_FETCH_DATA_PENDING](): void {
    this.matchdayIsLoading = true
    this.matchdayHasError = false
  }

  @mutation [MATCHDAY_FETCH_DATA_SUCCESS](payload: Matchday): void {
    this.matchdayIsLoading = false
    this.matchdayHasError = false
    this.matchday = payload
  }
  @mutation [MATCHDAY_FETCH_DATA_ERROR](payload: string): void {
    this.matchdayIsLoading = false
    this.matchdayHasError = true
    this.matchdayErrorMsg = payload
  }

  @action async [MATCHDAY_GET_CURRENT]() {
    this[MATCHDAY_FETCH_DATA_PENDING]()
    try {
      const response = await http.get('/matchdays/current')
      this[MATCHDAY_FETCH_DATA_SUCCESS](response.data)
    } catch (error) {
      this[MATCHDAY_FETCH_DATA_ERROR](error.message)
    }
  }

  @action async [MATCHDAY_GET_SPECIFIC]({ year, matchday }: MatchdayProps) {
    this[MATCHDAY_FETCH_DATA_PENDING]()
    try {
      const response = await http.get(`/matchdays/${year}/${matchday}`)
      this[MATCHDAY_FETCH_DATA_SUCCESS](response.data)
    } catch (error) {
      this[MATCHDAY_FETCH_DATA_ERROR](error.message)
    }
  }
}

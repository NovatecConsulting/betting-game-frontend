import { createModule, mutation, action, getter } from 'vuex-class-component'
import http from '@/utils/Http'
import {
  TEAMSTANDING_GET_SPECIFIC,
  TEAMSTANDING_GET_CURRENT,
  TEAMSTANDING_FETCH_DATA_PENDING,
  TEAMSTANDING_FETCH_DATA_SUCCESS,
  TEAMSTANDING_FETCH_DATA_ERROR
} from '../actions'
import { TeamStandings } from '@/models/TeamStandings'
type TeamStandingProps = { season: string }

const VuexModule = createModule({
  namespaced: 'teamStanding',
  strict: false
})

export class TeamStandingsStore extends VuexModule {
  teamStandings: TeamStandings = []
  teamStandingIsLoading: boolean = true
  teamStandingHasError: boolean = false
  teamStandingErrorMsg?: string;

  @mutation [TEAMSTANDING_FETCH_DATA_PENDING](): void {
    this.teamStandingIsLoading = true
    this.teamStandingHasError = false
  }

  @mutation [TEAMSTANDING_FETCH_DATA_SUCCESS](payload: TeamStandings): void {
    this.teamStandingIsLoading = false
    this.teamStandingHasError = false
    this.teamStandings = payload
  }
  @mutation [TEAMSTANDING_FETCH_DATA_ERROR](payload: string): void {
    this.teamStandingIsLoading = false
    this.teamStandingHasError = true
    this.teamStandingErrorMsg = payload
  }

  @action async [TEAMSTANDING_GET_CURRENT]() {
    this[TEAMSTANDING_FETCH_DATA_PENDING]()
    try {
      const response = await http.get('/scoreboard/current')
      this[TEAMSTANDING_FETCH_DATA_SUCCESS](response.data)
      console.log('TeamStandingfetch', response.data)
    } catch (error) {
      this[TEAMSTANDING_FETCH_DATA_ERROR](error.message)
    }
  }

  @action async [TEAMSTANDING_GET_SPECIFIC]({ season }: TeamStandingProps) {
    this[TEAMSTANDING_FETCH_DATA_PENDING]()
    try {
      const response = await http.get(`/scoreboard/${season}`)
      this[TEAMSTANDING_FETCH_DATA_SUCCESS](response.data)
    } catch (error) {
      this[TEAMSTANDING_FETCH_DATA_ERROR](error.message)
    }
  }
}

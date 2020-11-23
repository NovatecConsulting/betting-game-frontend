import { createModule, mutation, action, getter } from 'vuex-class-component'
import MatchdayOverview from '@/models/MatchdayOverview'
import http from '@/utils/Http'

const VuexModule = createModule({
  strict: false
})

export class MatchdayOverviewStore extends VuexModule {
  matchdayOverview: MatchdayOverview | null = null
  matchdayOverviewIsLoading: boolean = true
  matchdayOverviewHasError: boolean = false
  matchdayOverviewErrorMsg?: string

  @mutation fetchDataOverviewPending(): void {
    this.matchdayOverviewIsLoading = true
    this.matchdayOverviewHasError = false
  }

  @mutation fetchDataOverviewSuccess(payload: MatchdayOverview): void {
    this.matchdayOverviewIsLoading = false
    this.matchdayOverviewHasError = false
    this.matchdayOverview = payload
  }
  @mutation fetchDataOverviewError(payload: string): void {
    this.matchdayOverviewIsLoading = false
    this.matchdayOverviewHasError = true
    this.matchdayOverviewErrorMsg = payload
  }

  @action async getAllMatchesOfCurrentSeason() {
    this.fetchDataOverviewPending()
    try {
      const response = await http.get('/matchdays/current-season')
      console.log('success')
      this.fetchDataOverviewSuccess(response.data)
    } catch (error) {
      this.fetchDataOverviewError(error.message)
    }
  }

  @action async getAllMatchesOfSeason(season: string) {
    this.fetchDataOverviewPending()
    try {
      const response = await http.get(`/matchdays/${season}`)
      this.fetchDataOverviewSuccess(response.data)
    } catch (error) {
      this.fetchDataOverviewError(error.message)
    }
  }

  get getMatchdayOverview() {
    return this.matchdayOverview
  }

  get getMatchdayOverviewisLoading() {
    return this.matchdayOverviewIsLoading
  }

  get getMatchdayOverviewHasError() {
    return this.matchdayOverviewHasError
  }

  get getMatchdayOverviewErrorMessage() {
    return this.matchdayOverviewErrorMsg
  }
}

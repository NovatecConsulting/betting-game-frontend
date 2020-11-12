import { createModule, mutation, action, getter } from 'vuex-class-component'
import Matchday from '@/models/Matchday'
import http from '@/utils/Http'

type MatchdayProps = { year: string; matchday: string }

const VuexModule = createModule({
  strict: false
})

export class MatchdayStore extends VuexModule {
  matchday: Matchday | null = null
  matchdayIsLoading: boolean = true
  matchdayHasError: boolean = false
  matchdayErrorMsg?: string

  @mutation fetchDataPending(): void {
    this.matchdayIsLoading = true
    this.matchdayHasError = false
  }

  @mutation fetchDataSuccess(payload: Matchday): void {
    this.matchdayIsLoading = false
    this.matchdayHasError = false
    this.matchday = payload
  }
  @mutation fetchDataError(payload: string): void {
    this.matchdayIsLoading = false
    this.matchdayHasError = true
    this.matchdayErrorMsg = payload
  }

  @action async getCurrentMatchday() {
    this.fetchDataPending()
    try {
      const response = await http.get('/matchdays/current')
      this.fetchDataSuccess(response.data)
    } catch (error) {
      this.fetchDataError(error.message)
    }
  }

  @action async getSpecificMatchday({ year, matchday }: MatchdayProps) {
    this.fetchDataPending()
    try {
      const response = await http.get(`/matchdays/${year}/${matchday}`)
      this.fetchDataSuccess(response.data)
    } catch (error) {
      this.fetchDataError(error.message)
    }
  }

  get getMatchday() {
    return this.matchday
  }

  get isLoading() {
    return this.matchdayIsLoading
  }

  get hasError() {
    return this.matchdayHasError
  }

  get errorMessage() {
    return this.matchdayErrorMsg
  }
}

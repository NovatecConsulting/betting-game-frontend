import Matchday from './Matchday'

export default class MatchdayOverview {
  public current: string
  public matchDays: Matchday[]

  constructor(current: string, matchDays: Matchday[]) {
    this.current = current
    this.matchDays = matchDays
  }
}

import Team from './Team'
import Result from './Result'

export default interface Match {
  id: number
  home: Team
  guest: Team
  kickOffDateTime: string
  matchIsFinished: boolean
  result: Result | null
}

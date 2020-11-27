import Match from './Match'

export default interface Matchday {
  id: number
  name: String
  firstMatchStartDateTime: string
  lastMatchStartDateTime: string
  matches?: Match[]
}

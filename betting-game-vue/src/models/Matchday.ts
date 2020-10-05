export default class Matchday {
  public id: number
  public name: String
  public firstMatchStartDateTime: string
  public lastMatchStartDateTime: string
  public matches: Match[]

  constructor(
    id: number,
    name: String,
    firstMatchStartDateTime: string,
    lastMatchStartDateTime: string,
    matches: Match[]
  ) {
    this.id = id
    this.name = name
    this.firstMatchStartDateTime = firstMatchStartDateTime
    this.lastMatchStartDateTime = lastMatchStartDateTime
    this.matches = matches
  }
}

class Match {
  public id: number
  public home: Team
  public guest: Team
  public kickOffDateTime: string
  public matchIsFinished: boolean
  public result: Result

  constructor(id: number, home: Team, guest: Team, kickOffDateTime: string, matchIsFinished: boolean, result: Result) {
    this.id = id
    this.home = home
    this.guest = guest
    this.kickOffDateTime = kickOffDateTime
    this.matchIsFinished = matchIsFinished
    this.result = result
  }
}

class Team {
  public id: number
  public name: string
  public shortName: string
  public logo: string

  constructor(id: number, name: string, shortName: string, logo: string) {
    this.id = id
    this.name = name
    this.shortName = shortName
    this.logo = logo
  }
}

class Result {
  public final: Goals
  public halftime: Goals

  constructor(final: Goals, halftime: Goals) {
    this.final = final
    this.halftime = halftime
  }
}

class Goals {
  public goalsHome: number
  public goalsGuest: number

  constructor(goalsHome: number, goalsGuest: number) {
    this.goalsHome = goalsHome
    this.goalsGuest = goalsGuest
  }
}

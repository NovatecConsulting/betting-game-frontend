import { DateTime } from 'luxon';
import { TeamName } from './teams.enum';

export class Matchday {
  id: number;
  name: string;
  matches: Match[];
  firstMatchStartDateTime: DateTime;
  lastMatchStartDateTime: DateTime;
}

export class Match {
  id: number;
  home: Team;
  guest: Team;
  kickOffDateTime: DateTime;
  matchIsFinished: boolean;
  result: {
    final: {
      goalsHome: number;
      goalsGuest: number;
    };
    halftime: {
      goalsHome: number;
      goalsGuest: number;
    };
  };
}

export class Team {
  id: number;
  name: TeamName;
  shortName: string;
  logo: string;
}

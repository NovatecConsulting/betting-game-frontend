import { DateTime } from 'luxon';

export class Matchday {
  matches: Match[];
  startDateTime: DateTime;
  done: boolean;
}

export class Match {
  startDateTIme: DateTime;
  home: string;
  guest: string;
  goalsHome: number;
  goalsGuest: number;
}

import { Moment } from 'moment';

export class Matchday {
  matches: Match[];
  startDateTime: Moment;
  done: boolean;
}

export class Match {
  startDateTIme: Moment;
  home: string;
  guest: string;
  goalsHome: number;
  goalsGuest: number;
}

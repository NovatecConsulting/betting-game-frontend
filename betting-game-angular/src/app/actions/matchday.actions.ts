import { Matchday } from '../model/matchday';

export namespace MatchdayAction {
  export class Add {
    static readonly type = '[Matchday] Add Matchday';
    constructor(public matchday: Matchday) {
      console.log(matchday);
    }
  }
}

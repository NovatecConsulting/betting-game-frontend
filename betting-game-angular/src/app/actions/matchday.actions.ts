import { Matchday } from '../model/matchday';

export namespace MatchdayAction {
  export class Add {
    static readonly type = '[Matchday] Add Matchday';
    constructor(public matchday: Matchday) {}
  }

  export class GetCurrent {
    static readonly type = '[Matchday] Get Current';
  }
}

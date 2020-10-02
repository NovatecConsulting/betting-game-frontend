import { Matchday } from '../model/matchday';
import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { MatchdayAction } from '../actions/matchday.actions';
import Add = MatchdayAction.Add;

@State<Matchday>({
  name: 'app',
  defaults: { matches: null, done: null, startDateTime: null }
})
@Injectable()
export class AppState {
  constructor() {}
  matchDay: Matchday;

  @Action(Add)
  addMatchday(ctx: StateContext<Matchday>, action: Add) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      matches: action.matchday.matches,
      startDateTime: action.matchday.startDateTime,
      done: action.matchday.done
    });
  }
}

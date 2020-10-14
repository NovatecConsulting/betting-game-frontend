import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { MatchdayService } from '../services/matchday.service';
import { Matchday } from '../model/matchday';
import { MatchdayAction } from '../actions/matchday.actions';
import { catchError, tap } from 'rxjs/operators';
import { LoadingDataFromBackendFailed } from '../actions/error.actions';

export interface MatchdayStateModel {
  matchday: Matchday;
  isLoading: boolean;
}

@State<MatchdayStateModel>({
  name: 'matchday',
  defaults: {
    matchday: undefined,
    isLoading: false
  }
})
@Injectable()
export class MatchdayState {
  constructor(private matchdayService: MatchdayService) {}

  @Action(MatchdayAction.GetCurrent)
  getCurrent(ctx: StateContext<MatchdayStateModel>) {
    ctx.patchState({ isLoading: true });
    return this.matchdayService.getCurrentMatchday().pipe(
      tap((res: Matchday) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          matchday: res,
          isLoading: false
        });
      }),
      catchError((err) => {
        ctx.patchState({ isLoading: false });
        return ctx.dispatch(new LoadingDataFromBackendFailed(err.statusCode, err.message));
      })
    );
  }
}

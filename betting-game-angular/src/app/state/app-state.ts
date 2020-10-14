import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { LoadingDataFromBackendFailed } from '../actions/error.actions';

export interface AppStateModel {
  error: any;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    error: undefined
  }
})
@Injectable()
export class AppState {
  constructor() {}

  @Action(LoadingDataFromBackendFailed)
  loadingDataFromBackendFailed(ctx: StateContext<AppStateModel>, action: LoadingDataFromBackendFailed) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      error: { statusCode: action.statusCode, message: action.message }
    });
  }
}

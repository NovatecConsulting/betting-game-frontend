import { MatchdayState } from './matchday-state';
import { Actions, NgxsModule, ofActionDispatched, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { MATCHDAY } from '../mock-data/mock-matchday';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatchdayAction } from '../actions/matchday.actions';
import GetCurrent = MatchdayAction.GetCurrent;
import spyOn = jest.spyOn;
import { MatchdayService } from '../services/matchday.service';
import { Observable, of, throwError } from 'rxjs';
import { LoadingDataFromBackendFailed } from '../actions/error.actions';

describe('MatchdayState', () => {
  let store: Store;
  let matchdayService: MatchdayService;

  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([MatchdayState]), HttpClientTestingModule]
    });

    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      matchday: MATCHDAY
    });

    matchdayService = TestBed.inject(MatchdayService);
    actions$ = TestBed.inject(Actions);
  });

  it('should set data from backend to store on success', () => {
    spyOn(matchdayService, 'getCurrentMatchday').mockReturnValue(of(MATCHDAY));

    store.dispatch(new GetCurrent());

    const currentMatchday = store.selectSnapshot((state) => state.matchday.matchday);
    expect(currentMatchday).toEqual(MATCHDAY);
  });

  it('should dispatch error action when service throws error', (done) => {
    actions$.pipe(ofActionDispatched(LoadingDataFromBackendFailed)).subscribe(() => {
      done();
    });

    spyOn(matchdayService, 'getCurrentMatchday').mockReturnValue(throwError({ status: 500, message: 'Test' }));

    store.dispatch(new GetCurrent());

    const currentMatchday = store.selectSnapshot((state) => state.matchday.matchday);
    expect(currentMatchday).toEqual(undefined);
  });

  describe('selectors', () => {
    it('it should select current matchday', () => {
      const currentMatchday = store.selectSnapshot((state) => state.matchday);
      expect(currentMatchday).toEqual(MATCHDAY);
    });
  });
});

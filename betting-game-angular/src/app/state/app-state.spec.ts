import { AppState } from './app-state';
import { NgxsModule, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { LoadingDataFromBackendFailed } from '../actions/error.actions';

describe('AppState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])]
    });

    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      error: { statusCode: 500, message: 'Internal Server Error' }
    });
  });

  it('should create an instance', () => {
    expect(new AppState()).toBeTruthy();
  });

  it('should set an error to store', () => {
    store.dispatch(new LoadingDataFromBackendFailed(500, 'Internal Server Error'));
    const error = store.selectSnapshot((state) => state.error);
    expect(error).toEqual({ statusCode: 500, message: 'Internal Server Error' });
  });
});

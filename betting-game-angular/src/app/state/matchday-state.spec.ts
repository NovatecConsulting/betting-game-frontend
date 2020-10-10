import { MatchdayState } from './matchday-state';
import { NgxsModule, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { defaultMatchday } from '../mock-data/default.matchday';
import { MatchdayService } from '../services/matchday.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MatchdayState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([MatchdayState]), HttpClientTestingModule]
    });

    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      matchday: defaultMatchday
    });
  });

  // it('it toggles feed', () => {
  //   store.dispatch(new FeedAnimals());
  //
  //   const feed = store.selectSnapshot(state => state.zoo.feed);
  //   expect(feed).toBe(true);
  // });

  describe('selectors', () => {
    it('it should select current matchday', () => {
      const currentMatchday = store.selectSnapshot((state) => state.matchday);
      expect(currentMatchday).toEqual(defaultMatchday);
    });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchdayComponent } from './matchday.component';
import { NgxsModule, Store } from '@ngxs/store';
import { Match, Matchday } from '../../model/matchday';
import { of } from 'rxjs';
import { DateTime } from 'luxon';
import { AppState } from '../../state/app-state';

describe('MatchdayComponent', () => {
  let component: MatchdayComponent;
  let fixture: ComponentFixture<MatchdayComponent>;
  let store: Store;
  const mockState: AppState = {
    matchDay: {
      startDateTime: DateTime.fromISO('2020-09-18T20:30:00'),
      done: true,
      matches: [
        {
          startDateTIme: DateTime.fromISO('2020-09-18T20:30:00'),
          home: 'FC Bayern München',
          guest: 'FC Schalke 04',
          goalsHome: 8,
          goalsGuest: 0
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-19T15:30:00'),
          home: 'Eintracht Frankfurt',
          guest: 'Arminia Bielefeld',
          goalsHome: 1,
          goalsGuest: 1
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: '1. FC Union Berlin',
          guest: 'FC Augsburg',
          goalsHome: 1,
          goalsGuest: 3
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: '1. FC Köln',
          guest: 'TSG Hoffenheim',
          goalsHome: 2,
          goalsGuest: 3
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: 'Werder Bremen',
          guest: 'Hertha BSC',
          goalsHome: 1,
          goalsGuest: 4
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: 'VfB Stuttgart',
          guest: 'SC Freiburg',
          goalsHome: 2,
          goalsGuest: 3
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T18:30:00'),
          home: 'Borussia Dortmund',
          guest: 'Borussia Mönchengladbach',
          goalsHome: 3,
          goalsGuest: 0
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-19T15:30:00'),
          home: 'RB Leipzig',
          guest: '1. FSV Mainz 05',
          goalsHome: 3,
          goalsGuest: 1
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-19 18:00:00'),
          home: 'VfL Wolfsburg',
          guest: 'Bayer 04 Leverkusen',
          goalsHome: 1,
          goalsGuest: 3
        } as Match
      ]
    } as Matchday
  } as AppState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchdayComponent],
      imports: [NgxsModule.forRoot([AppState])]
    }).compileComponents();

    store = TestBed.inject(Store);
    store.reset({
      ...store.snapshot(),
      state: mockState
    });
    spyOn(store, 'select').and.returnValue(of(mockState));
    spyOn(store, 'selectSnapshot').and.returnValue(mockState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ToDo (MBA): test if matches are displayed
  // it('should contain list of matches', () => {
  //   fixture.detectChanges();
  //   let ul = fixture.nativeElement.querySelector('ul');
  //   expect(ul.childCount).toEqual(9);
  // });
});

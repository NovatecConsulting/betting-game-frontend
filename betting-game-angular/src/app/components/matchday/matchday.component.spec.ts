import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchdayComponent } from './matchday.component';
import { NgxsModule, Store } from '@ngxs/store';
import { Match, Matchday } from '../../model/matchday';
import { of } from 'rxjs';
import { DateTime } from 'luxon';
import { AppState } from '../../state/app-state';
import { Teams } from '../../model/teams.enum';
import { By } from '@angular/platform-browser';

describe('MatchdayComponent', () => {
  let component: MatchdayComponent;
  let fixture: ComponentFixture<MatchdayComponent>;
  const mockState: AppState = {
    matchDay: {
      startDateTime: DateTime.fromISO('2020-09-18T20:30:00'),
      done: true,
      matches: [
        {
          startDateTIme: DateTime.fromISO('2020-09-18T20:30:00'),
          home: Teams.FC_BAYERN_MUENCHEN,
          guest: Teams.FC_SCHALKE_04,
          goalsHome: 8,
          goalsGuest: 0
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-19T15:30:00'),
          home: Teams.EINTRACHT_FRANKFURT,
          guest: Teams.ARMINIA_BIELEFELD,
          goalsHome: 1,
          goalsGuest: 1
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: Teams.FC_UNION_BERLIN,
          guest: Teams.FC_AUGSBURG,
          goalsHome: 1,
          goalsGuest: 3
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: Teams.FC_KOELN,
          guest: Teams.TSG_HOFFENHEIM,
          goalsHome: 2,
          goalsGuest: 3
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: Teams.WERDER_BREMEN,
          guest: Teams.HERTHA_BSC,
          goalsHome: 1,
          goalsGuest: 4
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T15:30:00'),
          home: Teams.VFB_STUTTGART,
          guest: Teams.SC_FREIBURG,
          goalsHome: 2,
          goalsGuest: 3
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-18T18:30:00'),
          home: Teams.BORUSSIA_DORTMUND,
          guest: Teams.BORUSSIA_MOENCHENGLADBACH,
          goalsHome: 3,
          goalsGuest: 0
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-19T15:30:00'),
          home: Teams.RB_LEIPZIG,
          guest: Teams.FSV_MAINZ_05,
          goalsHome: 3,
          goalsGuest: 1
        } as Match,
        {
          startDateTIme: DateTime.fromISO('2020-09-19 18:00:00'),
          home: Teams.VFL_WOLFSBURG,
          guest: Teams.BAYER_04_LEVERKUSEN,
          goalsHome: 1,
          goalsGuest: 3
        } as Match
      ]
    } as Matchday
  } as AppState;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MatchdayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchdayComponent);
    component = fixture.componentInstance;
    Object.defineProperty(component, 'matchday$', { writable: true });
    component.matchday$ = of(mockState.matchDay);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of matches', () => {
    const ul = fixture.debugElement.query(By.css('ul'));
    expect(ul.children.length).toEqual(9);
  });
});

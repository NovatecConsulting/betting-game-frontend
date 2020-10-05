import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { MatchdayAction } from './actions/matchday.actions';
import { Match, Matchday } from './model/matchday';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'betting-game-angular';

  constructor(private store: Store) {
    store.dispatch(
      new MatchdayAction.Add({
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
      } as Matchday)
    );
  }
}

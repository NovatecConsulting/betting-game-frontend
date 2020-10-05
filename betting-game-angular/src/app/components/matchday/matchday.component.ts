import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Matchday } from '../../model/matchday';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.scss']
})
export class MatchdayComponent {
  constructor(private store: Store) {}
  @Select((state) => state.app) matchday$: Observable<Matchday>;
}

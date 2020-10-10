import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Matchday } from '../../model/matchday';
import { MatchdayAction } from '../../actions/matchday.actions';
import GetCurrent = MatchdayAction.GetCurrent;

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.scss']
})
export class MatchdayComponent implements OnInit {
  constructor(private store: Store) {}
  @Select((state) => state.matchday.matchday) matchday$: Observable<Matchday>;
  @Select((state) => state.matchday.isLoading) loading$: Observable<boolean>;

  ngOnInit(): void {
    this.store.dispatch(new GetCurrent());
  }
}

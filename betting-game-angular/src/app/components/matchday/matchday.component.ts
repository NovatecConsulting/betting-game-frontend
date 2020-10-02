import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Matchday } from '../../model/matchday';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.scss']
})
export class MatchdayComponent implements OnInit {
  constructor(private store: Store) {}
  public matchday: Matchday;
  @Select((state) => state.app) matchday$: Observable<Matchday>;
  ngOnInit(): void {
    this.matchday$.subscribe((m) => console.log(m));
  }
}

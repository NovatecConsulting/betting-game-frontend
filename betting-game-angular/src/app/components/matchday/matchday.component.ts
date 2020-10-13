import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Matchday } from '../../model/matchday';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.scss']
})
export class MatchdayComponent {
  @Select((state) => state.app) matchday$: Observable<Matchday>;
}

import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { TEAMS } from './mocks/TeamMock';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeams(): Team[] {
    return TEAMS;
  }
}

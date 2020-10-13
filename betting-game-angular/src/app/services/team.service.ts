import { Injectable } from '@angular/core';
import { Team } from '../model/team';
import { TEAMS } from '../mock-data/mock-teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeams(): Team[] {
    return TEAMS;
  }
}

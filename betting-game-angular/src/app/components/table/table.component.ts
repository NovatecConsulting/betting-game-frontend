import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../model/team';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  Teams: Team[];
  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.Teams = this.getTeams();
  }

  getTeams(): Team[] {
    return this.teamService.getTeams();
  }
}

import { TeamStatistics } from './team-statistics';

export class Team {
  name: string;
  stats: TeamStatistics;

  constructor(name: string, stats: TeamStatistics) {
    this.name = name;
    this.stats = stats;
  }
}

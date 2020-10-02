import { teamStatistics } from './teamStatistic';

export class Team {
  name: string;
  stats: teamStatistics;

  constructor(name: string, stats: teamStatistics) {
    this.name = name;
    this.stats = stats;
  }
}

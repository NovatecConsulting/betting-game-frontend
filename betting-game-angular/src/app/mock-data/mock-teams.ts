import { Team } from '../model/team';

export const TEAMS: Team[] = [
  {
    name: 'Stuttgart',
    stats: {
      rank: 1,
      gamesPlayed: 2,
      score: 6,
      goals: 5,
      goalsAgainst: 0,
      goalDifference: 5,
      wins: 2,
      loose: 0,
      draw: 0
    }
  },
  {
    name: 'Dortmund',
    stats: {
      rank: 2,
      gamesPlayed: 2,
      score: 5,
      goals: 4,
      goalsAgainst: 2,
      goalDifference: 4,
      wins: 1,
      loose: 0,
      draw: 1
    }
  },
  {
    name: 'Werder',
    stats: {
      rank: 3,
      gamesPlayed: 2,
      score: 5,
      goals: 4,
      goalsAgainst: 2,
      goalDifference: 4,
      wins: 1,
      loose: 0,
      draw: 1
    }
  },
  {
    name: 'Bayern München',
    stats: {
      rank: 16,
      gamesPlayed: 2,
      score: 0,
      goals: 0,
      goalsAgainst: 3,
      goalDifference: -3,
      wins: 0,
      loose: 2,
      draw: 0
    }
  }
];

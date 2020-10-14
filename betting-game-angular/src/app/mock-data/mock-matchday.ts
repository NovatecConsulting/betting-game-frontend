import { Matchday } from '../model/matchday';
import { DateTime } from 'luxon';
import { TeamName } from '../model/teams.enum';

export const MATCHDAY: Matchday = {
  id: 3,
  name: '3. Spieltag',
  firstMatchStartDateTime: DateTime.fromISO('2020-09-18T20:30:00'),
  lastMatchStartDateTime: DateTime.fromISO('2020-09-20T20:30:00'),
  matches: [
    {
      id: 58603,
      home: {
        id: 80,
        name: TeamName.FC_UNION_BERLIN,
        shortName: 'Union Berlin',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/1._FC_Union_Berlin_1966_-_1990.gif/320px-1._FC_Union_Berlin_1966_-_1990.gif'
      },
      guest: {
        id: 81,
        name: TeamName.FSV_MAINZ_05,
        shortName: 'FSV Mainz',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/1099px-Logo_Mainz_05.svg.png'
      },
      kickOffDateTime: DateTime.fromISO('2020-10-02T20:30+02:00[Europe/Berlin]'),
      matchIsFinished: true,
      result: { final: { goalsHome: 1, goalsGuest: 0 }, halftime: { goalsHome: 4, goalsGuest: 0 } }
    },
    {
      id: 58596,
      home: {
        id: 7,
        name: TeamName.BORUSSIA_DORTMUND,
        shortName: 'Dortmund',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/240px-Borussia_Dortmund_logo.svg.png'
      },
      guest: {
        id: 112,
        name: TeamName.SC_FREIBURG,
        shortName: 'SC Freiburg',
        logo:
          'https://upload.wikimedia.org/wikipedia/de/thumb/f/f1/SC-Freiburg_Logo-neu.svg/739px-SC-Freiburg_Logo-neu.svg.png'
      },
      kickOffDateTime: DateTime.fromISO('2020-10-03T15:30+02:00[Europe/Berlin]'),
      matchIsFinished: true,
      result: { final: { goalsHome: 1, goalsGuest: 0 }, halftime: { goalsHome: 4, goalsGuest: 0 } }
    },
    {
      id: 58597,
      home: {
        id: 91,
        name: TeamName.EINTRACHT_FRANKFURT,
        shortName: 'Frankfurt',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1024px-Eintracht_Frankfurt_Logo.svg.png'
      },
      guest: {
        id: 123,
        name: TeamName.TSG_HOFFENHEIM,
        shortName: 'Hoffenheim',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/TSG_Logo-Standard_4c.png'
      },
      kickOffDateTime: DateTime.fromISO('2020-10-03T15:30+02:00[Europe/Berlin]'),
      matchIsFinished: true,
      result: { final: { goalsHome: 0, goalsGuest: 1 }, halftime: { goalsHome: 2, goalsGuest: 1 } }
    }
  ]
};

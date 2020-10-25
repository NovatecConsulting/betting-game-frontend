<template>
  <!-- TODO MOBILE VIEW -->
  <div class="matchday min-w-sm max-w-3xl">
    <div class="px-4 sm:px-8 py-4 overflow-x-auto">
      <div class="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
        <table class="matchday__table leading-normal w-full table-auto">
          <thead>
            <tr>
              <th
                colspan="4"
                class="px-8 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
              >
                {{ sampleMatchday.name }}:
                {{ sampleMatchday.firstMatchStartDateTime | dateTime }}
                -
                {{ sampleMatchday.lastMatchStartDateTime | dateTime }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="match in sampleMatchday.matches"
              :key="match.id"
              class="matchday__row hover:bg-gray-200 cursor-pointer"
            >
              <td class="matchday__row-item">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-full h-full rounded-full" :src="match.home.logo" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ match.home.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="matchday__row-item">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-full h-full rounded-full" :src="match.guest.logo" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ match.guest.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="matchday__row-item" :class="{ 'text-base font-bold': match.result }">
                <p class="text-gray-900">
                  <span v-if="match.result">{{
                    match.result.final.goalsHome + ' : ' + match.result.final.goalsGuest
                  }}</span>
                  <span v-else>{{ match.kickOffDateTime | dateTime }}</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import Matchday from '../models/Matchday'

@Component
export default class MatchdayTable extends Vue {
  sampleMatchday: Matchday = {
    id: 5,
    name: '5. Spieltag',
    firstMatchStartDateTime: '2020-10-23T20:30+02:00[Europe/Berlin]',
    lastMatchStartDateTime: '2020-10-26T20:30+01:00[Europe/Berlin]',
    matches: [
      {
        id: 58620,
        home: {
          id: 16,
          name: 'VfB Stuttgart',
          shortName: 'Stuttgart',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/921px-VfB_Stuttgart_1893_Logo.svg.png'
        },
        guest: {
          id: 65,
          name: '1. FC Köln',
          shortName: '1. FC Köln',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/FC_Cologne_logo.svg/901px-FC_Cologne_logo.svg.png'
        },
        kickOffDateTime: '2020-10-23T20:30+02:00[Europe/Berlin]',
        matchIsFinished: true,
        result: { final: { goalsHome: 1, goalsGuest: 1 }, halftime: { goalsHome: 1, goalsGuest: 1 } }
      },
      {
        id: 58616,
        home: {
          id: 40,
          name: 'FC Bayern',
          shortName: 'FC Bayern',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/240px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png'
        },
        guest: {
          id: 91,
          name: 'Eintracht Frankfurt',
          shortName: 'Frankfurt',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1024px-Eintracht_Frankfurt_Logo.svg.png'
        },
        kickOffDateTime: '2020-10-24T15:30+02:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58618,
        home: {
          id: 81,
          name: '1. FSV Mainz 05',
          shortName: 'FSV Mainz',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/1099px-Logo_Mainz_05.svg.png'
        },
        guest: {
          id: 87,
          name: 'Borussia Mönchengladbach',
          shortName: 'Gladbach',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_Mönchengladbach_logo.svg'
        },
        kickOffDateTime: '2020-10-24T15:30+02:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58619,
        home: {
          id: 1635,
          name: 'RB Leipzig',
          shortName: 'RBL',
          logo:
            'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/800px-RB_Leipzig_2014_logo.svg.png'
        },
        guest: {
          id: 54,
          name: 'Hertha BSC',
          shortName: 'Hertha BSC',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Hertha_BSC_Logo_2012.svg/2858px-Hertha_BSC_Logo_2012.svg.png'
        },
        kickOffDateTime: '2020-10-24T15:30+02:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58621,
        home: {
          id: 80,
          name: '1. FC Union Berlin',
          shortName: 'Union Berlin',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/1._FC_Union_Berlin_1966_-_1990.gif/320px-1._FC_Union_Berlin_1966_-_1990.gif'
        },
        guest: {
          id: 112,
          name: 'SC Freiburg',
          shortName: 'SC Freiburg',
          logo:
            'https://upload.wikimedia.org/wikipedia/de/thumb/f/f1/SC-Freiburg_Logo-neu.svg/739px-SC-Freiburg_Logo-neu.svg.png'
        },
        kickOffDateTime: '2020-10-24T15:30+02:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58617,
        home: {
          id: 7,
          name: 'Borussia Dortmund',
          shortName: 'Dortmund',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/240px-Borussia_Dortmund_logo.svg.png'
        },
        guest: {
          id: 9,
          name: 'FC Schalke 04',
          shortName: 'Schalke 04',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg'
        },
        kickOffDateTime: '2020-10-24T18:30+02:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58623,
        home: {
          id: 131,
          name: 'VfL Wolfsburg',
          shortName: 'Wolfsburg',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo-VfL-Wolfsburg.svg/1024px-Logo-VfL-Wolfsburg.svg.png'
        },
        guest: {
          id: 83,
          name: 'Arminia Bielefeld',
          shortName: 'Bielefeld',
          logo:
            'https://upload.wikimedia.org/wikipedia/de/thumb/e/e5/Logo_Arminia_Bielefeld.svg/1024px-Logo_Arminia_Bielefeld.svg.png'
        },
        kickOffDateTime: '2020-10-25T15:30+01:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58622,
        home: {
          id: 134,
          name: 'Werder Bremen',
          shortName: 'Bremen',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/681px-SV-Werder-Bremen-Logo.svg.png'
        },
        guest: {
          id: 123,
          name: 'TSG 1899 Hoffenheim',
          shortName: 'Hoffenheim',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/TSG_Logo-Standard_4c.png'
        },
        kickOffDateTime: '2020-10-25T18:00+01:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      },
      {
        id: 58615,
        home: {
          id: 6,
          name: 'Bayer Leverkusen',
          shortName: 'Leverkusen',
          logo:
            'https://upload.wikimedia.org/wikipedia/de/thumb/f/f7/Bayer_Leverkusen_Logo.svg/1280px-Bayer_Leverkusen_Logo.svg.png'
        },
        guest: {
          id: 95,
          name: 'FC Augsburg',
          shortName: 'Augsburg',
          logo: 'https://upload.wikimedia.org/wikipedia/de/b/b5/Logo_FC_Augsburg.svg'
        },
        kickOffDateTime: '2020-10-26T20:30+01:00[Europe/Berlin]',
        matchIsFinished: false,
        result: null
      }
    ]
  }
  created() {}
}
</script>

<style scoped>
.matchday__row-item {
  @apply px-5 py-4 border-b border-gray-200 text-sm;
}
</style>

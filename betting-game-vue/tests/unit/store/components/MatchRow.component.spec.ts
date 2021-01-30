import { mount } from '@vue/test-utils'
import MatchRow from '@/components/MatchRow.vue'
import Match from '@/models/Match'

describe('MatchRow', () => {
  const mockMatch: Match = {
    id: 58747,
    home: {
      id: 16,
      name: 'VfB Stuttgart',
      shortName: 'Stuttgart',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/921px-VfB_Stuttgart_1893_Logo.svg.png'
    },
    guest: {
      id: 81,
      name: '1. FSV Mainz 05',
      shortName: 'Mainz',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/1099px-Logo_Mainz_05.svg.png'
    },
    kickOffDateTime: '2021-01-29T20:30+01:00[Europe/Berlin]',
    matchIsFinished: true,
    result: { final: { goalsHome: 0, goalsGuest: 0 }, halftime: { goalsHome: 2, goalsGuest: 0 } }
  }

  let wrapper = mount(MatchRow, {
    propsData: {
      match: mockMatch
    },
    data() {
      return {
        displayBetting: false,
        displayBettingContent: false
      }
    },
    computed: {
      userIsLoggedIn() {
        return true
      }
    }
  })

  afterAll(() => {
    wrapper.destroy()
  })

  it('should init component', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should display betting option when match row is clicked', async () => {
    let matchBet = wrapper.find('MatchBet')
    expect(matchBet.exists()).toBeFalsy()

    const matchRow = wrapper.find('.match__row')
    await matchRow.trigger('click')
    wrapper.setData({ displayBetting: true, displayBettingContent: true })
    await wrapper.vm.$nextTick()
    const matchBetExists = wrapper.find('.match__bet').exists()

    expect(matchBetExists).toBeTruthy()
  })
})

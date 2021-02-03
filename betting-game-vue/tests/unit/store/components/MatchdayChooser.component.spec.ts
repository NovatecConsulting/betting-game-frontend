import { shallowMount, createLocalVue } from '@vue/test-utils'
import MatchdayChooser from '@/components/MatchdayChooser.vue'
import Vuex from 'vuex'
import { MATCHDAY_GET_SPECIFIC, OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON } from '@/store/actions'
import MatchdayOverview from '@/models/MatchdayOverview'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MatchdayChooser', () => {
  const store = new Vuex.Store({})
  store.dispatch = jest.fn()

  const sampleMatchdayOverview: MatchdayOverview = {
    current: 1,
    matchDays: [
      {
        id: 1,
        name: '1. Spieltag',
        firstMatchStartDateTime: '2020-10-02T20:30+02:00',
        lastMatchStartDateTime: '2020-10-04T18:00+02:00',
        matches: []
      },
      {
        id: 2,
        name: '2. Spieltag',
        firstMatchStartDateTime: '2020-10-02T20:30+02:00',
        lastMatchStartDateTime: '2020-10-04T18:00+02:00',
        matches: []
      }
    ]
  }
  const mockStore = {
    matchdayOverview: sampleMatchdayOverview
  }

  const wrapper = shallowMount(MatchdayChooser, {
    store,
    localVue,
    data() {
      return {
        matchdayOverviewStore: mockStore
      }
    },
    computed: {}
  })

  afterAll(() => {
    wrapper.destroy()
  })

  it('should init component', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should dispatch get all matches in current season when component is mounted', () => {
    expect(store.dispatch).toHaveBeenCalledWith(`matchdayOverview/${OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON}`)
  })

  it('should display all matchdays in the season', () => {
    const options = wrapper.findAll('option')
    expect(options.exists()).toBeTruthy()
    expect(options.length).toBe(sampleMatchdayOverview.matchDays.length)
  })

  it('should dispatch get matches of second (2) matchday action when the option is selected', async () => {
    const options = wrapper.findAll('option')
    await options.at(1).setSelected()
    expect(store.dispatch).toHaveBeenCalledWith(`matchday/${MATCHDAY_GET_SPECIFIC}`, { year: 2020, matchday: 2 })
  })
})

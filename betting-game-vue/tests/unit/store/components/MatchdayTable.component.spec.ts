import { shallowMount, createLocalVue } from '@vue/test-utils'
import MatchdayTable from '@/components/MatchdayTable.vue'
import Vuex from 'vuex'
import { MATCHDAY_GET_CURRENT, MATCHDAY_GET_SPECIFIC } from '@/store/actions'
import Matchday from '@/models/Matchday'
import { dateTime } from '@/filters/DateTime'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.filter('dateTime', dateTime)

describe('MatchdayTable Component', () => {
  const store = new Vuex.Store({})
  store.dispatch = jest.fn()

  const mockMatchday: Matchday = {
    id: 0,
    name: 'String',
    firstMatchStartDateTime: '2021-01-31T18:00+01:00[Europe/Berlin]',
    lastMatchStartDateTime: '2021-01-31T18:00+01:00[Europe/Berlin]'
  }

  const mockStore = {
    matchday: mockMatchday
  }

  const loadingWrapper = shallowMount(MatchdayTable, {
    store,
    localVue,
    computed: {
      matchdayIsLoading() {
        return true
      },
      matchday() {
        return null
      }
    }
  })

  const loadedWrapper = shallowMount(MatchdayTable, {
    store,
    localVue,
    data() {
      return {
        matchdayStore: mockStore
      }
    },
    computed: {
      matchdayIsLoading() {
        return false
      },
      matchday() {
        return mockMatchday
      }
    }
  })

  afterAll(() => {
    loadedWrapper.destroy()
    loadingWrapper.destroy()
  })

  it('should init component', () => {
    expect(loadingWrapper.vm).toBeTruthy()
  })

  it('should dispatch get current matchday action when component is created', () => {
    expect(store.dispatch).toHaveBeenCalledWith(`matchday/${MATCHDAY_GET_CURRENT}`)
  })

  it('should display skeleton table when data is loading', async () => {
    const skeletonTable = loadingWrapper.find('#skeleton-table')
    expect(skeletonTable.exists()).toBeTruthy()
  })

  it('should display matchday table when data is loaded', async () => {
    const matchdayTable = loadedWrapper.find('#matchday-table')
    expect(matchdayTable.exists()).toBeTruthy()
  })

  it('should dispatch get specific matchday action when refresh button is pressed', async () => {
    const refreshButton = loadedWrapper.find('#refresh-button')
    await refreshButton.trigger('click')
    expect(store.dispatch).toHaveBeenCalledWith(`matchday/${MATCHDAY_GET_SPECIFIC}`, {
      year: 2020,
      matchday: mockStore.matchday.id
    })
  })
})

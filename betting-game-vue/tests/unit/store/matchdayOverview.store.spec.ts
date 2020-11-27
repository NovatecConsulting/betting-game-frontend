import { MatchdayOverviewStore } from '@/store/modules/matchdayOverview.store'
import http from '@/utils/Http'
import MatchdayOverview from '@/models/MatchdayOverview'
import {
  OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON,
  OVERVIEW_GET_ALL_MATCHES_SPECIFIC_SEASON,
  OVERVIEW_FETCH_DATA_PENDING,
  OVERVIEW_FETCH_DATA_ERROR,
  OVERVIEW_FETCH_DATA_SUCCESS
} from '@/store//actions'

jest.mock('@/utils/Http')

const sampleMatchdayOverview: MatchdayOverview = {
  current: 3,
  matchDays: [
    {
      id: 123,
      name: '1. Spieltag',
      firstMatchStartDateTime: '2020-10-02T20:30+02:00',
      lastMatchStartDateTime: '2020-10-04T18:00+02:00',
      matches: []
    }
  ]
}

describe('Matchday.store', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Mutations', () => {
    it('should call fetchDataPending and change to matchdayOverviewIsLoading=true and matchdayOverviewHasError=false.', () => {
      const store = new MatchdayOverviewStore()

      store[OVERVIEW_FETCH_DATA_PENDING]()

      expect(store.matchdayOverview).toBeUndefined()
      expect(store.matchdayOverviewIsLoading).toBeTruthy()
      expect(store.matchdayOverviewHasError).toBeFalsy()
      expect(store.matchdayOverviewErrorMsg).toBeUndefined()
    })

    it('should call fetchDataSuccess and change to matchdayOverviewIsLoading=false and matchdayOverviewHasError=false and sampleMatchday.', () => {
      const store = new MatchdayOverviewStore()

      store[OVERVIEW_FETCH_DATA_SUCCESS](sampleMatchdayOverview)

      expect(store.matchdayOverview).toEqual(sampleMatchdayOverview)
      expect(store.matchdayOverviewIsLoading).toBeFalsy()
      expect(store.matchdayOverviewHasError).toBeFalsy()
      expect(store.matchdayOverviewErrorMsg).toBeUndefined()
    })

    it('should call fetchDataError and change to matchdayOverviewIsLoading=false and matchdayOverviewHasError=true and error message.', () => {
      const store = new MatchdayOverviewStore()

      store[OVERVIEW_FETCH_DATA_ERROR]('error')

      expect(store.matchdayOverview).toBeUndefined()
      expect(store.matchdayOverviewIsLoading).toBeFalsy()
      expect(store.matchdayOverviewHasError).toBeTruthy()
      expect(store.matchdayOverviewErrorMsg).toEqual('error')
    })
  })

  describe('Actions', () => {
    describe('getAllMatchesOfCurrentSeason', () => {
      it('should get all matchdays of the current season successfully and provide the corresponsing data', async () => {
        const store = new MatchdayOverviewStore()
        ;(http.get as jest.Mock).mockReturnValue({
          data: sampleMatchdayOverview
        })

        await store[OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON]()

        expect(store.matchdayOverview).toEqual(sampleMatchdayOverview)
        expect(store.matchdayOverviewIsLoading).toBeFalsy()
        expect(store.matchdayOverviewHasError).toBeFalsy()
        expect(store.matchdayOverviewErrorMsg).toBeUndefined()
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/current-season')
      })
      it('should receive an error while getting the matchdays of the current season and provide the error message', async () => {
        const store = new MatchdayOverviewStore()
        ;(http.get as jest.Mock).mockRejectedValue(new Error('error'))

        await store[OVERVIEW_GET_ALL_MATCHES_CURRENT_SEASON]()

        expect(store.matchdayOverview).toBeUndefined()
        expect(store.matchdayOverviewIsLoading).toBeFalsy()
        expect(store.matchdayOverviewHasError).toBeTruthy()
        expect(store.matchdayOverviewErrorMsg).toEqual('error')
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/current-season')
      })
    })

    describe('getAllMatchesOfSeason', () => {
      it('should get all matchdays of a specific season successfully and provide the corresponsing data', async () => {
        const store = new MatchdayOverviewStore()
        ;(http.get as jest.Mock).mockReturnValue({
          data: sampleMatchdayOverview
        })

        await store[OVERVIEW_GET_ALL_MATCHES_SPECIFIC_SEASON]('2020')

        expect(store.matchdayOverview).toEqual(sampleMatchdayOverview)
        expect(store.matchdayOverviewIsLoading).toBeFalsy()
        expect(store.matchdayOverviewHasError).toBeFalsy()
        expect(store.matchdayOverviewErrorMsg).toBeUndefined()
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/2020')
      })
      it('should receive an error while getting all matchdays of a specific season and provide the error message', async () => {
        const store = new MatchdayOverviewStore()
        ;(http.get as jest.Mock).mockRejectedValue(new Error('error'))

        await store[OVERVIEW_GET_ALL_MATCHES_SPECIFIC_SEASON]('2020')

        expect(store.matchdayOverview).toBeUndefined()
        expect(store.matchdayOverviewIsLoading).toBeFalsy()
        expect(store.matchdayOverviewHasError).toBeTruthy()
        expect(store.matchdayOverviewErrorMsg).toEqual('error')
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/2020')
      })
    })
  })
})

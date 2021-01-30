import { MatchdayStore } from '@/store/modules/matchday.store'
import Matchday from '@/models/Matchday'
import http from '@/utils/Http'
import {
  MATCHDAY_GET_CURRENT,
  MATCHDAY_GET_SPECIFIC,
  MATCHDAY_FETCH_DATA_PENDING,
  MATCHDAY_FETCH_DATA_ERROR,
  MATCHDAY_FETCH_DATA_SUCCESS
} from '@/store/actions'

jest.mock('@/utils/Http')

const sampleMatchday: Matchday = {
  id: 123,
  name: '1. Spieltag',
  firstMatchStartDateTime: '2020-10-02T20:30+02:00',
  lastMatchStartDateTime: '2020-10-04T18:00+02:00',
  matches: []
}

describe('Matchday.store', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Mutations', () => {
    it('should call fetchDataPending and change to matchdayIsLoading=true and matchdayHasError=false.', () => {
      const store = new MatchdayStore()

      store[MATCHDAY_FETCH_DATA_PENDING]()
      expect(store.matchday).toBeNull()
      expect(store.matchdayIsLoading).toBeTruthy()
      expect(store.matchdayHasError).toBeFalsy()
      expect(store.matchdayErrorMsg).toBeUndefined()
    })

    it('should call fetchDataSuccess and change to matchdayIsLoading=false and matchdayHasError=false and sampleMatchday.', () => {
      const store = new MatchdayStore()

      store[MATCHDAY_FETCH_DATA_SUCCESS](sampleMatchday)

      expect(store.matchday).toEqual(sampleMatchday)
      expect(store.matchdayIsLoading).toBeFalsy()
      expect(store.matchdayHasError).toBeFalsy()
      expect(store.matchdayErrorMsg).toBeUndefined()
    })

    it('should call fetchDataError and change to matchdayIsLoading=false and matchdayHasError=true and error message.', () => {
      const store = new MatchdayStore()

      store[MATCHDAY_FETCH_DATA_ERROR]('error')

      expect(store.matchday).toBeNull()
      expect(store.matchdayIsLoading).toBeFalsy()
      expect(store.matchdayHasError).toBeTruthy()
      expect(store.matchdayErrorMsg).toEqual('error')
    })
  })

  describe('Actions', () => {
    describe('getCurrentMatchDay', () => {
      it('should get the current matchday successfully and provide the corresponsing data', async () => {
        const store = new MatchdayStore()
        ;(http.get as jest.Mock).mockReturnValue({
          data: sampleMatchday
        })

        await store[MATCHDAY_GET_CURRENT]()

        expect(store.matchday).toEqual(sampleMatchday)
        expect(store.matchdayIsLoading).toBeFalsy()
        expect(store.matchdayHasError).toBeFalsy()
        expect(store.matchdayErrorMsg).toBeUndefined()
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/current')
      })
      it('should receive an error while getting the current matchday and provide the error message', async () => {
        const store = new MatchdayStore()
        ;(http.get as jest.Mock).mockRejectedValue(new Error('error'))

        await store[MATCHDAY_GET_CURRENT]()

        expect(store.matchday).toBeNull()
        expect(store.matchdayIsLoading).toBeFalsy()
        expect(store.matchdayHasError).toBeTruthy()
        expect(store.matchdayErrorMsg).toEqual('error')
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/current')
      })
    })

    describe('getSpecificMatchDay', () => {
      it('should get a specific matchday successfully and provide the corresponsing data', async () => {
        const store = new MatchdayStore()
        ;(http.get as jest.Mock).mockReturnValue({
          data: sampleMatchday
        })

        await store[MATCHDAY_GET_SPECIFIC]({ year: '2020', matchday: '1' })

        expect(store.matchday).toEqual(sampleMatchday)
        expect(store.matchdayIsLoading).toBeFalsy()
        expect(store.matchdayHasError).toBeFalsy()
        expect(store.matchdayErrorMsg).toBeUndefined()
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/2020/1')
      })
      it('should receive an error while getting a specific matchday and provide the error message', async () => {
        const store = new MatchdayStore()
        ;(http.get as jest.Mock).mockRejectedValue(new Error('error'))

        await store[MATCHDAY_GET_SPECIFIC]({ year: '2020', matchday: '1' })

        expect(store.matchday).toBeNull()
        expect(store.matchdayIsLoading).toBeFalsy()
        expect(store.matchdayHasError).toBeTruthy()
        expect(store.matchdayErrorMsg).toEqual('error')
        expect((http.get as jest.Mock).mock.calls[0][0]).toEqual('/matchdays/2020/1')
      })
    })
  })
})

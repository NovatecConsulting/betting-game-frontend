import { shallowMount, createLocalVue } from '@vue/test-utils'
import MatchdayTable from '@/components/MatchdayTable.vue'
import Vuex from 'vuex'
import { MatchdayStore } from '@/store/modules/matchday.store'
import { MATCHDAY_GET_CURRENT, MATCHDAY_GET_SPECIFIC } from '@/store/actions'
import { extractVuexModule } from 'vuex-class-component'
import { store } from '@/store/store.vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MatchdayTable Component', () => {
  let store: any

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ...extractVuexModule(MatchdayStore)
        /*  matchdayStore: {
          namespaced: true,
          actions: {
            MATCHDAY_GET_CURRENT: jest.fn(),
            MATCHDAY_GET_SPECIFIC: jest.fn()
          }
        } */
      }
    })
  })
  it('component should init', () => {
    const wrapper = shallowMount(MatchdayTable, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})

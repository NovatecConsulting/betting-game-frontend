import { ThemeStore } from '@/store/modules/theme.store'
import { THEME_CHANGE_THEME } from '@/store/actions'

describe('Theme.store', () => {
  const store = new ThemeStore()

  it('theme store should initialize with light theme', () => {
    expect(store).toBeTruthy()
    expect(store.theme).toMatch('light')
  })

  it('change theme mutation should change theme value and update DOM correctly', () => {
    const dom = document.querySelector('html')
    store[THEME_CHANGE_THEME]('dark')
    expect(store.theme).toMatch('dark')
    expect(dom).toBeTruthy()
    expect(dom?.classList).toContain('dark')
  })
})

import GetTexts from '../src/t-getter'
import texts from './__mocks__/texts1'
texts.title = 'Title (ver1)'

describe('Initial text objects', () => {
  it('should receive an error if texts have not set', () => {
    expect(() => GetTexts()).toThrow('[t-getter.js] There is no texts objects')
  })

  it('should set texts', () => {
    const t = GetTexts([texts])
    expect(t('title')).toBe('Title (ver1)')
  })

  it('should throw error if you try to change a freezed object', () => {
    expect(() => (texts.title = 'Title (ver2)')).toThrow(/read only property/)
  })
})

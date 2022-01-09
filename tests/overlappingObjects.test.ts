import GetTexts from '../src/t-getter'
import texts1 from './__mocks__/texts1'
import texts2 from './__mocks__/texts2'
const t = GetTexts([texts2, texts1])

describe('Object texts2 overlaps texts1', () => {
  it('should show a title from texts2', () => {
    expect(t('title')).toBe('Title2')
  })

  it('should show a body text from texts2', () => {
    expect(t('body.second_level')).toBe('Second level 2')
  })

  it('should show a text from a third level', () => {
    expect(t('body.1.2.3.text')).toBe('three 2')
  })

  it('should show a text from text1 of a 2nd level', () => {
    expect(t('body.1.2.text')).toBe('Two')
  })
})

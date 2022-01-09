import GetTexts from '../src/t-getter'
import texts from './__mocks__/texts1'

const textsBefore = {
  title: 'One more title'
}

const t = GetTexts([textsBefore, texts], {
  placeholder: 'No response placeholder',
  freeze: false
})

describe('Initial texts with unfreeze and placeholder options', () => {
  it('Update property from the second (default) object in the array', () => {
    expect(t('body.second_level')).toBe('Second level')
    texts.body.second_level = 'Second level (ver2)'
    expect(t('body.second_level')).toBe('Second level (ver2)')
  })

  test('Update property from the first object in the array', () => {
    expect(t('title')).toBe('One more title')
    textsBefore.title = 'One more title (ver2)'
    expect(t('title')).toBe('One more title (ver2)')
  })

  it('should show placeholder instead of undefined', () => {
    expect(t('super_title')).toBe('No response placeholder')
  })
})

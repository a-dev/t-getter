import GetTexts from '../src/t-getter.ts'
import texts1 from './__mocks__/texts1'
const t = GetTexts([texts1])

describe('Get texts', () => {
  it('should show first level string', () => {
    expect(t('title')).toBe('Title')
  })

  it('should show the second level string', () => {
    expect(t('body.second_level')).toBe('Second level')
  })

  it('should show the fifth level string', () => {
    expect(t('body.1.2.3.text')).toBe('Three')
  })

  it('should show digits', () => {
    expect(t('digits.one')).toBe(1)
    expect(t('digits.42')).toBe(42)
  })

  it('should show texts from a function with arguments', () => {
    expect(t('fns.one_arg', 'Hi!')).toBe('One arg - Hi!')
    expect(t('fns.two_arg', 'one', 'two')).toBe(
      'First arg - one, second arg - two'
    )
    expect(t('fns.any_args', 1, 2, 3, 4, 5)).toBe('Args sum = 15')
  })

  it('should receive undefined for an undeclared property at any level', () => {
    expect(t('super_title')).toBeUndefined()
    expect(t('body.2')).toBeUndefined()
    expect(t('foo.foo.foo')).toBeUndefined()
  })
})

import GetText from '../../../src/t-getter.ts'
import header from '../texts/header.ts'
import main from '../texts/main.ts'
import footer from '../texts/footer.ts'

const defaultTexts = {
  header,
  main,
  footer
}
window.GET_TEXT_DEMO = window.GET_TEXT_DEMO || {}

function unlistedKey(key) {
  console.info(`There is no key — ${key}`)
  return '😶'
}

const t = GetText([window.GET_TEXT_DEMO, defaultTexts], {
  freeze: false,
  placeholder: unlistedKey
})

export default t

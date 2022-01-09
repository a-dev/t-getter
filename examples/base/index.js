import t from './texts/index.js'

function printTexts(texts) {
  for (let phrase of texts) {
    console.log(phrase)
  }
}

const texts = [
  t('main.hi!'),
  t('main.what'),
  t('main.who', ['Peter', 'Phil', 'Paul'][Math.floor(Math.random() * 3)]),
  t('any_component.title'),
  t('any_component.description')
]

printTexts(texts)

export default null

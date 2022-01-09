import GetText from '../../../src/t-getter.ts'
import main from './main.js'
import any_component from './any_component.js'
const texts = {
  main,
  any_component
}

const t = GetText([texts], {
  placeholder: 'Placeholder for nothing there'
})

export default t

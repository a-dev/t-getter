type Placeholder = undefined | string | Function
interface Options {
  placeholder?: Placeholder
  freeze?: boolean
}

type Result = string | number | Function
type TextObject = Record<string, Result | object>
type TextPath = string
type Texts = TextObject[] | []
type TextFnArguments = string[] | number[]

const ALLOWED_TYPES = ['string', 'number']
const ERROR_TEXTS = Object.freeze({
  not_set: '[t-getter.js] There is no texts objects'
})

export default function GetText(
  texts: Texts,
  { placeholder = undefined, freeze = true }: Options = {}
) {
  if (!texts?.length) throw new Error(ERROR_TEXTS.not_set)
  texts = texts.map((o) => (freeze ? Object.freeze(o) : o))
  let placeholderOpt: any = placeholder

  function placeholderFn(options: {
    prop: TextPath
    args: TextFnArguments
  }): undefined | any {
    return typeof placeholderOpt == 'function'
      ? placeholderOpt(options)
      : placeholderOpt
  }

  function checkAllowedTypes(val: any): boolean {
    return ALLOWED_TYPES.includes(typeof val)
  }

  function getTextValue({
    index,
    prop,
    args
  }: {
    index: number
    args: TextFnArguments
    prop: TextPath
  }): Result {
    const path = prop.split('.')
    let textObject: any = texts[index]

    let i = 0
    while (i < path.length) {
      let value: TextObject | Result = textObject[path[i]]
      if (value == null) break
      if (typeof value == 'function') value = value(...args)
      textObject = value
      i++
    }
    return textObject
  }

  function t(prop: TextPath, ...args: TextFnArguments): Result {
    if (!texts.length) throw new Error(ERROR_TEXTS.not_set)

    let result: any = undefined
    let index = 0
    while (index < texts.length) {
      const value = getTextValue({ index, prop, args })
      if (checkAllowedTypes(value)) {
        result = value
        break
      }
      index++
    }

    if (!checkAllowedTypes(result)) return placeholderFn({ prop, args })

    return result
  }

  return t
}

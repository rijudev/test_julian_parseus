import { Parser } from './base'

export default class Parse extends Parser {
  static TYPE = 'combined'

  constructor(options) {
    super(options)
  }

  run() {
    const {
      value: inValue,
      combinedKeys,
      combinedDelimiter,
      ctx
    } = this.options

    const combined =
      combinedKeys &&
      combinedKeys.map(k => ctx[k]).join(combinedDelimiter || ',')

    const value = combined || inValue
    this.options.value = value

    return this.options
  }
}

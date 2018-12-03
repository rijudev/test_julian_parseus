import { Parser } from './base'
import { hasDefinedValue } from '../../helpers/utils'

export default class Parse extends Parser {
  static TYPE = 'string'

  constructor(options) {
    super(options)
  }

  run() {
    if (super.valueTypeMatches(Parse.TYPE)) return this.options

    const { value: inValue } = this.options
    const value = hasDefinedValue(inValue) ? `${inValue}` : inValue
    this.options.value = value

    return this.options
  }
}

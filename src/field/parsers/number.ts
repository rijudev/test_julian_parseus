import { Parser } from './base'
import { hasDefinedValue } from '../../helpers/utils'

export default class Parse extends Parser {
  static TYPE = 'number'

  constructor(options) {
    super(options)
  }

  run() {
    if (super.valueTypeMatches(Parse.TYPE)) return this.options

    const { value: inValue } = this.options
    const value = hasDefinedValue(inValue) ? parseInt(inValue, 10) : inValue

    return { ...this.options, value }
  }
}

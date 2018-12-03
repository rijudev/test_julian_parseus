import { Parser } from './base'
import { hasDefinedValue } from '../../helpers/utils'

export default class Parse extends Parser {
  static TYPE = 'decimal'

  constructor(options) {
    super(options)
  }

  run() {
    const { value: inValue, precision, fixed } = this.options
    const parsed = hasDefinedValue(inValue) ? parseFloat(inValue) : inValue

    const value = parsed && parseFloat(parsed).toFixed(fixed || 5)
    this.options.value = value

    return this.options
  }
}

import { IParserOptions, IParserClass } from '../../helpers/interfaces'
import { hasDefinedValue } from '../../helpers/utils'
import { Parser } from './base'

export default class NumberParser extends Parser implements IParserClass {
  static TYPE = 'number'

  constructor(options: IParserOptions) {
    super(options)
  }

  run() {
    if (super.skip(NumberParser.TYPE, true)) return this.options

    const { value: inValue } = this.options
    const value = hasDefinedValue(inValue) ? parseInt(inValue, 10) : inValue

    return { ...this.options, value }
  }
}

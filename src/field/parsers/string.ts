import { IParserOptions, IParserClass } from '../../helpers/interfaces'
import { Parser } from './base'
import { hasDefinedValue } from '../../helpers/utils'

export default class StringParser extends Parser implements IParserClass {
  static TYPE = 'string'

  constructor(options: IParserOptions) {
    super(options)
  }

  run() {
    if (super.skip(StringParser.TYPE, true)) return this.options

    const { value: inValue } = this.options
    const value = hasDefinedValue(inValue) ? `${inValue}` : inValue

    return { ...this.options, value }
  }
}

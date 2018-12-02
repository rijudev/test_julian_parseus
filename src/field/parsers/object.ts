import { IParserOptions, IParserClass } from '../../helpers/interfaces'
import { hasDefinedValue } from '../../helpers/utils'
import { Parser } from './base'
import Parseus from '../../parseus'

export default class ObjectParser extends Parser implements IParserClass {
  static TYPE = 'object'

  constructor(options: IParserOptions) {
    super(options)
  }

  run() {
    if (super.skip(ObjectParser.TYPE)) return this.options

    const { value: inValue, model } = this.options
    const value = hasDefinedValue(inValue)
      ? Parseus(model).to(inValue)
      : inValue

    return { ...this.options, value }
  }
}

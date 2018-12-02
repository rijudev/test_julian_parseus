import { IParserOptions, IParserClass } from '../../helpers/interfaces'
import { hasDefinedValue } from '../../helpers/utils'
import { Parser } from './base'
import Parseus from '../../parseus'

export default class ArrayParser extends Parser implements IParserClass {
  static TYPE = 'array'

  constructor(options: IParserOptions) {
    super(options)
  }

  run() {
    if (super.skip(ArrayParser.TYPE)) return this.options

    const { value: inValue, model } = this.options
    const value = hasDefinedValue(inValue)
      ? inValue.map(inItem => Parseus(model).to(inItem))
      : inValue

    return { ...this.options, value }
  }
}

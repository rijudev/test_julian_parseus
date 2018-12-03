import { Parser } from './base'
import Parseus from '../../parseus'
import { IParserOptions } from '../../helpers/interfaces'
import { hasDefinedValue, getParseusMethod } from '../../helpers/utils'

export default class Parse extends Parser {
  static TYPE = 'array'

  constructor(options: IParserOptions) {
    super(options)
  }

  run() {
    const { value: inValue, model, isFrom } = this.options
    const call = getParseusMethod(isFrom)
    const value = hasDefinedValue(inValue)
      ? inValue.map(inItem => Parseus(model)[call](inItem))
      : inValue

    this.options.value = value

    return this.options
  }
}

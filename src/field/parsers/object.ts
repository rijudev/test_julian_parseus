import { Parser } from './base'
import Parseus from '../../parseus'
import { hasDefinedValue, getParseusMethod } from '../../helpers/utils'

export default class Parse extends Parser {
  static TYPE = 'object'

  constructor(options) {
    super(options)
  }

  run() {
    const { value: inValue, model, isFrom } = this.options
    const call = getParseusMethod(isFrom)
    const value = hasDefinedValue(inValue)
      ? Parseus(model)[call](inValue)
      : inValue

    this.options.value = value

    return this.options
  }
}

import Parseus from '../../parseus'
import { IParserOptions } from '../../helpers/interfaces'
import { hasDefinedValue, getParseusMethod } from './utils'

ArrayParser.TYPE = 'array'

export default function ArrayParser(options: IParserOptions): IParserOptions {
  const draft = Object.create(options)

  const { value: inValue, model, isFrom } = options
  const call = getParseusMethod(isFrom)
  const value = hasDefinedValue(inValue)
    ? inValue.map(inItem => Parseus(model)[call](inItem))
    : inValue

  return Object.assign(draft, { value })
}

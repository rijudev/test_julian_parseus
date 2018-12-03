import Parseus from '../../parseus'
import { IParserOptions } from '../../helpers/interfaces'
import { hasDefinedValue, getParseusMethod } from './utils'

ObjectParser.TYPE = 'object'

export default function ObjectParser(options: IParserOptions): IParserOptions {
  const draft = Object.create(options)

  const { value: inValue, model, isFrom } = options
  const call = getParseusMethod(isFrom)
  const value = hasDefinedValue(inValue)
    ? Parseus(model)[call](inValue)
    : inValue

  return Object.assign(draft, { value })
}

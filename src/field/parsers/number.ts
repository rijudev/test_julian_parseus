import { IParserOptions } from '../../helpers/interfaces'
import { hasDefinedValue, valueTypeMatches } from './utils'

NumberParser.TYPE = 'number'

export default function NumberParser(options: IParserOptions): IParserOptions {
  if (valueTypeMatches(NumberParser.TYPE, options)) return options

  const draft = Object.create(options)

  const { value: inValue } = options
  const value = hasDefinedValue(inValue) ? parseInt(inValue, 10) : inValue

  return Object.assign(draft, { value })
}

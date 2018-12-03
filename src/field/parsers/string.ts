import { IParserOptions } from '../../helpers/interfaces'
import { hasDefinedValue, valueTypeMatches } from './utils'

StringParser.TYPE = 'string'

export default function StringParser(options: IParserOptions): IParserOptions {
  if (valueTypeMatches(StringParser.TYPE, options)) return options

  const draft = Object.create(options)

  const { value: inValue } = options
  const value = hasDefinedValue(inValue) ? `${inValue}` : inValue

  return Object.assign(draft, { value })
}

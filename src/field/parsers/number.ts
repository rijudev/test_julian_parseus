import { IParserOptions } from '../../helpers/interfaces'
import { unmatchType } from '../../helpers/utils'

const TYPE = 'number'

export default function(options: IParserOptions): IParserOptions {
  const { type, value: inValue } = options
  if (unmatchType(type, TYPE)) return options
  if (typeof inValue === TYPE) return options

  const value = parseInt(inValue, 10)

  return Object.assign(options, { value })
}

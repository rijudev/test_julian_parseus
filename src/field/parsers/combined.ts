import { IParserOptions } from '../../helpers/interfaces'

CombinedParser.TYPE = 'combined'

export default function CombinedParser(
  options: IParserOptions
): IParserOptions {
  if (!options.combinedKeys) return options

  const draft = Object.create(options)

  const { value: inValue, combinedKeys, combinedDelimiter, ctx } = options

  const combined = combinedKeys.map(k => ctx[k]).join(combinedDelimiter || ',')
  const value = combined || inValue

  return Object.assign(draft, { value })
}

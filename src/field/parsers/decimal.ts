import { IParserOptions } from '../../helpers/interfaces'

DecimalParser.TYPE = 'decimal'

export default function DecimalParser(options: IParserOptions): IParserOptions {
  const draft = Object.create(options)

  const { value: inValue } = options
  const value = parseFloat(parseFloat(inValue) as any).toFixed(
    options.fixed || 5
  )

  return Object.assign(draft, { value })
}

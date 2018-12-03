import parser from './field/parsers'
import { IArgsProcessor, Processed } from './helpers/interfaces'

function processor<T>(options: IArgsProcessor<T>, isFrom?): Processed<T> {
  const { acc, key, ctx, metadata } = options

  const meta = metadata[key]
  const value = ctx[meta.name || key]

  if (meta.isVirtual && isFrom) return acc

  const { targetKey, value: resultValue } = parser(
    Object.assign(options, Object.assign(meta, { isFrom, ctx, value }))
  )

  acc[targetKey] = resultValue

  return acc
}

export default processor

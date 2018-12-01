import { IArgsProcessor, Processed } from './helpers/interfaces'
import { getKeyMetadata } from './helpers/metadata'
import parser from './field/parsers'

function processor<T>(options: IArgsProcessor<T>): Processed<T> {
  const { acc, key, ctx, target } = options

  const value = ctx[key]
  const metadata = getKeyMetadata(target, key)

  acc[key] = parser(
    Object.assign(options, Object.assign(metadata, { ctx, value }))
  )

  return acc
}

export default processor

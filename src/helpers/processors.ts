import { IArgsProcessor, Processed, Type } from './interfaces'

function processor<T>(options: IArgsProcessor<T>): Processed<T> {
  const { acc, key, parsers, entries } = options
  const { ctx, meta, metaKey } = entries
  const value = ctx[key]
  const config = meta[metaKey]
  const defaultValue = meta[key] as any
  const { type, parser } = config
  const props = { ...config, value, ctx, defaultValue }
  const parsed = parser ? parser(props) : parsers[type as Type](props)
  return { ...(acc as any), [key]: parsed }
}

export default processor

import { IArgsProcessor, Processed } from './interfaces'

function processor<T>(options: IArgsProcessor<T>): Processed<T> {
  const { acc, key, entries } = options
  const { ctx, meta } = entries

  const value = ctx[key]
  const config = meta[key]
  const { parser } = config

  const props = { ...config, value, ctx }
  const parsed = parser && parser(props)
  return { ...(acc as any), [key]: parsed }
}

export default processor

import parsers from './parsers'
import { getMetaKey } from './helpers/utils'
import processor from './helpers/processors'

export default function parseus<T>(ctx: T) {
  const isArray = Array.isArray(ctx)
  return {
    to(model): T {
      const meta = new model()
      const keys = Object.keys(meta)

      if (isArray) {
        return (ctx as any).map(item => parseus(item).to(model))
      }

      return keys.reduce(
        (acc, key) => {
          const metaKey = getMetaKey(key)
          const entries = { ctx, metaKey, meta }
          const options = { acc, key, parsers, entries }
          return processor(options)
        },
        {} as T
      )
    }
  }
}

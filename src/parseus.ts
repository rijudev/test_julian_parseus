import parsers from './parsers'
import { METAKEY } from './helpers/constants'

export default function parseus<T>(ctx: T) {
  return {
    to(model): T {
      const keysWithDefaults = new model()
      const keys = Object.keys(keysWithDefaults)

      return keys.reduce(
        (acc, key) => {
          const value = ctx[key]
          const settings = keysWithDefaults[`${METAKEY}-${key}`]
          const { type, parse } = settings
          const defaultValue = keysWithDefaults[key]
          const props = { ...settings, value, ctx, defaultValue }
          const parsed = parse ? parse(props) : parsers[type](props)
          return { ...(acc as any), [key]: parsed }
        },
        {} as T
      )
    }
  }
}

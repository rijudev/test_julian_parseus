// TODO: move this to Reflect meta data
// or think another way
const map = {}

type Type = 'string' | 'number' | 'custom'

interface IOptions {
  name?: string
  type: Type
  parse?: Function
}

export function Field(options: IOptions) {
  return (target, key) => {
    map[key] = { ...options, key, target }
  }
}

const parsers = {
  number: ({ value }) => parseInt(value, 10),
  string: ({ value }) => `${value}`
}

export default function parseus<T>(ctx: T) {
  return {
    to(model): T {
      const keysWithDefaults = new model()
      const keys = Object.keys(keysWithDefaults)

      return keys.reduce(
        (acc, key) => {
          const value = ctx[key]
          const settings = map[key]
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

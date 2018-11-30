import { getMetaKey, getMetaDataKey } from './helpers/utils'
import processor from './helpers/processors'

interface IOptions<T> {
  model: any
  ctx: T
}

function process<T>(options: IOptions<T>): T {
  const { model, ctx } = options
  const metaKey = getMetaDataKey()
  const meta = Reflect.get(new model(), metaKey)
  const keys = Object.keys(meta)

  if (Array.isArray(ctx)) {
    return (ctx as any).map(item => parseus(item).to(model))
  }

  return keys.reduce(
    (acc, key) => {
      const entries = { ctx, meta }
      const options = { acc, key, entries }
      return processor(options)
    },
    {} as T
  )
}

export class Parseus {
  static to<T>(data: T) {
    return parseus(this).to(data)
  }

  static from<T>(data: T) {
    return parseus(this).from(data)
  }
}

export default function parseus(model) {
  return {
    to<T>(ctx: T): T {
      return process({ model, ctx })
    },
    from<T>(ctx: T): T {
      return process({ model, ctx })
    }
  }
}

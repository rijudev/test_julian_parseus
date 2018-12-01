import processor from './processor'
import { IArgsProcess } from './helpers/interfaces'
import { getMetadataKeys } from './helpers/metadata'

function process<T>(options: IArgsProcess<T>): T {
  const { ctx } = options
  const target = new options.model()
  const keys = getMetadataKeys(target)

  return keys.reduce((acc, key) => {
    const options = { acc, key, ctx, target }
    return processor(options)
  }, target)
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

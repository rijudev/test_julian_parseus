import processor from './processor'
import { IArgsProcess } from './helpers/interfaces'
import { getMetadataKeys, getMetadata } from './helpers/metadata'

function process<T>(options: IArgsProcess<T>, isFrom = false): T {
  const { ctx, keys, metadata, target } = options

  return keys.reduce((acc, key) => {
    return processor({ acc, key, keys, metadata, ctx, target }, isFrom)
  }, target)
}

export default function parseus(model) {
  const target = new model()
  const keys = getMetadataKeys(target)
  const metadata = getMetadata(target)
  const options: IArgsProcess<any> = { model, target, metadata, keys } as any
  return {
    to<T>(ctx: T): T {
      options.ctx = ctx
      return process(options)
    },
    from<T>(ctx: T): T {
      options.ctx = ctx
      return process(options, true)
    }
  }
}

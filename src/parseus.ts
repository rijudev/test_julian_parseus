import processor from './processor'
import { IArgsProcess } from './helpers/interfaces'
import { getMetadataKeys, getMetadata } from './helpers/metadata'

function process<T>(options: IArgsProcess<T>, isFrom = false): T {
  const { ctx, keys, metadata, target } = options
  const getOptions = (acc, key) => ({ acc, key, keys, metadata, ctx, target })

  return keys.reduce((acc, key) => {
    return processor(getOptions(acc, key), isFrom)
  }, target)
}

export default function parseus(model) {
  const target = new model()
  const keys = getMetadataKeys(target)
  const metadata = getMetadata(target)
  const options: any = { model, target, metadata, keys }
  return {
    to<T>(ctx: T): T {
      return process(Object.assign(options, { ctx }))
    },
    from<T>(ctx: T): T {
      return process(Object.assign(options, { ctx }), true)
    }
  }
}

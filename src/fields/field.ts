import { getMetaDataKey } from '../helpers/utils'
import { IOptions } from '../helpers/interfaces'
import parsers from './parsers'

const datakey = getMetaDataKey()

export function Field(options: IOptions) {
  return (target, key) => {
    const { type, parser } = options
    const defaultParser = parsers[type]
    const meta = {
      [key]: { ...options, key, parser: parser ? parser : defaultParser }
    }
    const prevMeta = Reflect.get(target, datakey) || {}
    Reflect.defineProperty(target, datakey, {
      configurable: true,
      value: { ...prevMeta, ...meta }
    })
  }
}

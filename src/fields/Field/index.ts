import { getMetaKey } from '../../helpers/utils'
import { IOptions } from '../../helpers/interfaces'

export function Field(options: IOptions) {
  return (target, key) => {
    const meta = { ...options, key, target }
    target[getMetaKey(key)] = meta
  }
}

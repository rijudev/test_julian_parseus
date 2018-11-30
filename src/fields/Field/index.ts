import { METAKEY } from '../../helpers/constants'
import { IOptions } from '../../helpers/interfaces'

export function Field(options: IOptions) {
  return (target, key) => {
    const meta = { ...options, key, target }
    target[`${METAKEY}-${key}`] = meta
  }
}

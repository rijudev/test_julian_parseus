import { METAKEY } from '../../helpers/constants'

type Type = 'string' | 'number' | 'custom'

export interface IOptionsNoType {
  name?: string
  parse?: Function
}

export interface IOptions extends IOptionsNoType {
  type: Type
}

export function Field(options: IOptions) {
  return (target, key) => {
    const meta = { ...options, key, target }
    target[`${METAKEY}-${key}`] = meta
  }
}

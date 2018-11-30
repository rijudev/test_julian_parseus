import { Field } from '../field'
import { IBaseOptions } from '../../helpers/interfaces'

export function PString(options: IBaseOptions = {}) {
  const type = 'string'
  return Field({ ...options, type })
}

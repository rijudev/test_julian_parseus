import { Field } from '../field'
import { IBaseOptions } from '../../helpers/interfaces'

export function PNumber(options: IBaseOptions = {}) {
  const type = 'number'
  return Field({ ...options, type })
}

import { Field } from '../Field'
import { IBaseOptions } from '../../helpers/interfaces'

export function TNumber(options: IBaseOptions = {}) {
  const type = 'number'
  return Field({ ...options, type })
}

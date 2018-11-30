import { Field } from '../field'
import { IBaseOptions, IClass } from '../../helpers/interfaces'

export function PArray(model: IClass, options: IBaseOptions = {}) {
  const type = 'array'
  return Field({ ...options, type, model })
}

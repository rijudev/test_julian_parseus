import { Field } from '../field'
import { IBaseOptions, IClass } from '../../helpers/interfaces'

export function PObject(model: IClass, options: IBaseOptions = {}) {
  const type = 'object'
  return Field({ ...options, type, model })
}

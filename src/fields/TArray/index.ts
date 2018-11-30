import { Field } from '../Field'
import { IBaseOptions, IClass } from '../../helpers/interfaces'

export function TArray(model: IClass, options: IBaseOptions = {}) {
  const type = 'array'
  return Field({ ...options, type, model })
}

import { Field } from '../Field'
import { IBaseOptions, IClass } from '../../helpers/interfaces'

export function TObject(model: IClass, options: IBaseOptions = {}) {
  const type = 'object'
  return Field({ ...options, type, model })
}

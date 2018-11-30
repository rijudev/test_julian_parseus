import { Field } from '../Field'
import { IOptionsNoType } from '../../helpers/interfaces'

export function TObject(model: new () => any, options: IOptionsNoType = {}) {
  const type = 'object'
  return Field({ ...options, type, model })
}

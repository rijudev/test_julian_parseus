import { Field } from '../Field'
import { IOptionsNoType } from '../../helpers/interfaces'

export function TArray(model, options: IOptionsNoType = {}) {
  const type = 'array'
  return Field({ ...options, type, model })
}

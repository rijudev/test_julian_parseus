import { Field } from '../Field'
import { IOptionsNoType } from '../../helpers/interfaces'

export function TNumber(options: IOptionsNoType = {}) {
  const type = 'number'
  return Field({ ...options, type })
}

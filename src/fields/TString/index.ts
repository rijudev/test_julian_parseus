import { Field } from '../Field'
import { IOptionsNoType } from '../../helpers/interfaces'

export function TString(options: IOptionsNoType = {}) {
  const type = 'string'
  return Field({ ...options, type })
}

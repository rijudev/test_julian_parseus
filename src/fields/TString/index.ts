import { Field } from '../Field'
import { IBaseOptions } from '../../helpers/interfaces'

export function TString(options: IBaseOptions = {}) {
  const type = 'string'
  return Field({ ...options, type })
}

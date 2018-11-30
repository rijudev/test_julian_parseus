import { Field, IOptionsNoType } from '../Field'

export function TString(options: IOptionsNoType = {}) {
  const type = 'string'
  return Field({ ...options, type })
}

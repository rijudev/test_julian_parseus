import { Field, IOptionsNoType } from '../Field'

export function TNumber(options: IOptionsNoType = {}) {
  const type = 'number'
  return Field({ ...options, type })
}

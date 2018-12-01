import { IParserOptions } from '../../helpers/interfaces'
import { makeReadOnly } from '../../helpers/utils'

export default function(options: IParserOptions): IParserOptions {
  const { readOnly, key, value, target } = options

  if (readOnly) {
    makeReadOnly(target, key, value)
  }

  return options
}

import { makeReadOnly, hasNotDefinedValue } from './utils'
import { IParserOptions, IBaseParserReturn } from '../../helpers/interfaces'

export default function(opts: IParserOptions): IBaseParserReturn {
  const draft = Object.create(opts)

  if (opts.readOnly) {
    makeReadOnly(opts.target, opts.key, opts.value)
  }

  if (hasNotDefinedValue(opts.value)) {
    Object.assign(draft, { value: opts.defaultValue })
  }

  const targetKey = opts.isFrom ? opts.name || opts.key : opts.key
  Object.assign(draft, { targetKey })

  return draft
}

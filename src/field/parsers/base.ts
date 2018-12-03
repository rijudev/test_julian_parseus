import { IParserOptions, IBaseParserReturn } from '../../helpers/interfaces'
import {
  unmatchType,
  makeReadOnly,
  hasNotDefinedValue
} from '../../helpers/utils'

export abstract class Parser {
  constructor(protected options: IParserOptions) {}

  run() {
    return this.options
  }

  static matches(instanceType, options: IParserOptions) {
    return instanceType === options.type
  }

  valueTypeMatches(instanceType) {
    return typeof this.options.value === instanceType
  }
}

export default function(opts: IParserOptions): IBaseParserReturn {
  let changes = {}
  let targetKey = opts.isFrom ? opts.name || opts.key : opts.key || opts.name

  if (opts.readOnly) {
    makeReadOnly(opts.target, opts.key, opts.value)
  }

  if (hasNotDefinedValue(opts.value)) {
    changes = Object.assign(changes, { value: opts.defaultValue })
  }

  return Object.assign(opts, Object.assign({ targetKey }, changes))
}

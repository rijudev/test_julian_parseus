import { IParserOptions } from '../../helpers/interfaces'
import {
  makeReadOnly,
  unmatchType,
  hasNotDefinedValue
} from '../../helpers/utils'

abstract class ToFreeze {
  constructor(readonly options) {}
}
export abstract class Parser extends ToFreeze {
  constructor(options: IParserOptions) {
    super(options)
  }

  skip(typeToValidate: string, withValueType: boolean = false) {
    const skip = unmatchType(typeToValidate, this.options.type)

    if (withValueType) {
      return skip || typeToValidate === typeof this.options.value
    }

    return skip
  }
}

export default function(options: IParserOptions): IParserOptions {
  const { readOnly, target, key, value, defaultValue } = Object.freeze(options)
  let changes = {}

  if (readOnly) {
    makeReadOnly(target, key, value)
  }

  if (hasNotDefinedValue(value)) {
    changes = Object.assign(changes, { value: defaultValue })
  }

  return { ...options, ...changes }
}

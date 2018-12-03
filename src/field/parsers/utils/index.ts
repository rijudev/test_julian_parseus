import { v1 } from '../../../helpers/utils'
import { IParserOptions, IParserHook } from '../../../helpers/interfaces'

export function genUniqueId() {
  return v1()
}

export function hasDefinedValue(value) {
  return value !== undefined
}

export function hasNotDefinedValue(value) {
  return !hasDefinedValue(value)
}

export function matches(type, options: IParserOptions) {
  return type === options.type
}

export function valueTypeMatches(type, options: IParserOptions) {
  return type === typeof options.value
}

export function makeReadOnly(target, key, value) {
  Reflect.defineProperty(target, key, {
    get: () => value,
    set: () => null
  })
}

function runHook(opts: IParserOptions, hook?: IParserHook) {
  if (!hook) return opts.value
  const { isFrom } = opts
  const { from, to } = hook
  let value = opts.value

  if (isFrom && from) {
    value = from(opts)
  } else if (to) {
    value = to(opts)
  }

  return value
}

export function runBeforeHook(opts: IParserOptions): IParserOptions {
  if (!opts.beforeHook) return opts
  opts.value = runHook(opts, opts.beforeHook)
  return opts
}

export function runAfterHook(opts: IParserOptions): IParserOptions {
  if (!opts.afterHook) return opts
  opts.value = runHook(opts, opts.afterHook)
  return opts
}

export function getParseusMethod(isFrom?: boolean) {
  return isFrom ? 'from' : 'to'
}

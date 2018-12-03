import { v1 } from 'uuid'
import { IOptions, FieldType, IParserOptions, IParserHook } from './interfaces'

export function makeReadOnly(target, key, value) {
  Reflect.defineProperty(target, key, {
    get: () => value,
    set: () => null
  })
}

export function getType(TypeConstructor): any {
  if (typeof TypeConstructor === 'function') {
    const instance = TypeConstructor()
    if (instance === undefined) return 'object'

    return Array.isArray(instance) ? 'array' : typeof instance
  }
}

export function mergeOptionsWithDesign(options: IOptions, reflectType) {
  let changes: IOptions = {}

  if (!options.model) {
    changes.model = reflectType
  }

  if (!options.type) {
    options.type = getType(reflectType)
  }

  return Object.assign(options, changes)
}

export function hasDefinedValue(value) {
  return value !== undefined
}

export function hasNotDefinedValue(value) {
  return !hasDefinedValue(value)
}

export function matchType(type1: string, type2: any) {
  return type1 === type2
}

export function matchTypeArr(typeArr: string | string[], type2: any) {
  return (typeArr as string[]).some(type => type === type2)
}

export function unmatchType(valueType: any, type?: FieldType) {
  if (!Array.isArray(valueType)) return !matchType(valueType, type)
  return !matchTypeArr(valueType, type)
}

export function genUniqueId() {
  return v1()
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

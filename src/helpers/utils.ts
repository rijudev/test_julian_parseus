import { IOptions, FieldType } from './interfaces'

export { v1 } from 'uuid'

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

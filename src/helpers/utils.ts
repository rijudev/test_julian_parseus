import { METADATAKEY } from './constants'

export const getMetadataKey = () => METADATAKEY

export function makeReadOnly(target, key, value) {
  Reflect.defineProperty(target, key, {
    get: () => value,
    set: () => null
  })
}

export function hasDefinedValue(value) {
  return value !== undefined
}

export function hasNotDefinedValue(value) {
  return !hasDefinedValue(value)
}

export function matchType(valueType: any, type: string) {
  return valueType === type
}

export function unmatchType(valueType: any, type: string) {
  return !matchType(valueType, type)
}

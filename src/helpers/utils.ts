import { METADATAKEY } from './constants'

export function makeReadOnly(target, key, value) {
  const get = () => value
  const set = () => null
  Reflect.defineProperty(target, key, {
    get,
    set
  })
}

export const getMetadataKey = () => METADATAKEY

export function matchType(valueType: any, type: string) {
  return valueType === type
}

export function unmatchType(valueType: any, type: string) {
  return !matchType(valueType, type)
}

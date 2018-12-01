import { getMetadataKey } from './utils'
import { IOptions } from './interfaces'

const metadataKey = getMetadataKey()

export function getMetadata(target): { [key: string]: IOptions } {
  return Reflect.get(target, metadataKey) || {}
}

export function getKeyMetadata(target, key: string) {
  return getMetadata(target)[key]
}

export function getMetadataKeys(target) {
  return Object.keys(getMetadata(target))
}

export function setKeyMetadata(target, key: string, data) {
  const metadata = getMetadata(target)
  Reflect.defineProperty(target, metadataKey, {
    configurable: true,
    value: { ...metadata, [key]: data }
  })
}

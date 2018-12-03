import { IOptions, IMetadata } from './interfaces'
import { METADATAKEY, METADATADESIGNKEY } from './constants'

export function getMetadata(target): { [key: string]: IOptions } {
  return Reflect.get(target, METADATAKEY) || {}
}

export function getMetadataDesign(target, key: string): IMetadata {
  return Reflect.getMetadata(METADATADESIGNKEY, target, key) || {}
}

export function getKeyMetadata(target, key: string) {
  return getMetadata(target)[key]
}

export function getMetadataKeys(target) {
  return Object.keys(getMetadata(target))
}

export function setKeyMetadata(target, key: string, data) {
  const metadata = getMetadata(target)
  Reflect.defineProperty(target, METADATAKEY, {
    configurable: true,
    value: Object.assign(metadata, { [key]: data })
  })
}

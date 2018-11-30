import { METAKEY } from './constants'

export const getMetaKey = key => `${METAKEY}${key}`
export const getMetaDataKey = () => getMetaKey('data')

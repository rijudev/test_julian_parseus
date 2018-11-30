import { METAKEY } from './constants'

export const getMetaKey = key => `__${METAKEY}-${key}__`

import { IOptions } from '../helpers/interfaces'
import { mergeOptionsWithDesign } from '../helpers/utils'
import { setKeyMetadata, getMetadataDesign } from '../helpers/metadata'

export default function(options: IOptions = {}) {
  return (target, key) => {
    const designMetadata: any = getMetadataDesign(target, key)
    setKeyMetadata(target, key, mergeOptionsWithDesign(options, designMetadata))
  }
}

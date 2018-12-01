import { IOptions } from '../helpers/interfaces'
import { setKeyMetadata } from '../helpers/metadata'

export default function(options: IOptions) {
  return (target, key) => {
    setKeyMetadata(target, key, options)
  }
}

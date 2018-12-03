import { genUniqueId } from './utils'
import { IParserOptions } from '../../helpers/interfaces'

UniqueParser.TYPE = 'unique'

export default function UniqueParser(options: IParserOptions): IParserOptions {
  const draft = Object.create(options)

  const { value: inValue } = options
  const value = inValue || genUniqueId()

  return Object.assign(draft, { value })
}

import { Type, IParser } from '../helpers/interfaces'
import number from './PNumber/parser'
import string from './PString/parser'
import object from './PObject/parser'
import array from './PArray/parser'

export default {
  number,
  string,
  object,
  array
} as { [key in Type]: IParser }

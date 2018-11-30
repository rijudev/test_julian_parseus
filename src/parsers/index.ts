import { Type, IParser } from '../helpers/interfaces'
import number from './number'
import string from './string'
import object from './object'
import array from './array'

export default {
  number,
  string,
  object,
  array
} as { [key in Type]: IParser }

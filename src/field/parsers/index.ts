import base from './base'
import { matches, runBeforeHook, runAfterHook } from './utils'
import { IParserOptions, IBaseParserReturn } from '../../helpers/interfaces'

import ArrayParser from './array'
import StringParser from './string'
import NumberParser from './number'
import ObjectParser from './object'
import UniqueParser from './unique'
import DecimalType from './decimal'
import CombinedParser from './combined'

const Parsers = [
  StringParser,
  NumberParser,
  ObjectParser,
  ArrayParser,
  UniqueParser,
  CombinedParser,
  DecimalType
]

export default function parser(options: IParserOptions): IBaseParserReturn {
  let draft = options

  draft = runBeforeHook(draft)

  for (let index = 0; index < Parsers.length; index++) {
    const Parser = Parsers[index]
    if (matches(Parser.TYPE, draft)) {
      draft = Parser(draft)
    }
  }

  draft = runAfterHook(draft)

  return base(draft)
}

import base from './base'
import { runBeforeHook, runAfterHook } from '../../helpers/utils'
import { IParserOptions, IBaseParserReturn } from '../../helpers/interfaces'

import StringParser from './string'
import NumberParser from './number'
import ObjectParser from './object'
import ArrayParser from './array'
import UniqueParser from './unique'
import CombinedParser from './combined'
import DecimalType from './decimal'

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
  options = runBeforeHook(options)

  for (let index = 0; index < Parsers.length; index++) {
    const Parser = Parsers[index]
    if (Parser.matches(Parser.TYPE, options)) {
      options = new Parser(options).run()
    }
  }

  options = runAfterHook(options)

  return base(options)
}

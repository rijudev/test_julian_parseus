import Base from './base'
import { IParserOptions } from '../../helpers/interfaces'

import StringParser from './string'
import NumberParser from './number'
import ObjectParser from './object'
import ArrayParser from './array'

const Parsers = [StringParser, NumberParser, ObjectParser, ArrayParser]

export default function parser(options: IParserOptions) {
  let optionsDraft = options

  for (let index = 0; index < Parsers.length; index++) {
    optionsDraft = new Parsers[index](optionsDraft).run()
  }

  optionsDraft = Base(optionsDraft)

  return optionsDraft.value
}

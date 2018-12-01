import Base from './base'
import ParserString from './string'
import ParserNumber from './number'
import { IParserOptions } from '../../helpers/interfaces'

const parsers = [ParserString, ParserNumber]

export default function parse(options: IParserOptions) {
  let optionsDraft = options

  for (let index = 0; index < parsers.length; index++) {
    const parser = parsers[index]
    optionsDraft = parser(optionsDraft)
  }

  optionsDraft = Base(optionsDraft)

  return optionsDraft.value
}

import { IParserOptions, IParser } from './interfaces'
export default (options: IParserOptions, parser: IParser) => {
  //   const { readOnly, value, defaultValue } = options

  return parser(options)
}

import { Parser } from './base'
import { genUniqueId } from '../../helpers/utils'

export default class Parse extends Parser {
  static TYPE = 'unique'

  constructor(options) {
    super(options)
  }

  run() {
    const value = this.options.value || genUniqueId()
    this.options.value = value
    return this.options
  }
}

import parseus from '../../parseus'
import { IParser } from '../../helpers/interfaces'

const parser: IParser = ({ value, model }) =>
  value.map(item => parseus(item).to(model))

export default parser

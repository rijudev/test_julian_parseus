import parseus from '../../../parseus'
import { IParser } from '../../../helpers/interfaces'

const parser: IParser = ({ value, model }) => parseus(value).to(model)

export default parser

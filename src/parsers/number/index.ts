import { IParser } from '../../helpers/interfaces'

const parser: IParser = ({ value, defaultValue }) =>
  parseInt(value || defaultValue, 10)

export default parser

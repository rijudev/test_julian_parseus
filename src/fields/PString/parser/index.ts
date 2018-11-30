import { IParser } from '../../../helpers/interfaces'

const parser: IParser = ({ value, defaultValue }) => `${value || defaultValue}`

export default parser

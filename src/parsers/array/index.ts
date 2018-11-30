import parseus from '../../parseus'
export default ({ value, model }) => value.map(item => parseus(item).to(model))

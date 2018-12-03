import { getType } from '../utils'
describe('getType', () => {
  test('identify automatically type', () => {
    class Hola {}
    expect(getType(Number)).toBe('number')
    expect(getType(String)).toBe('string')
    expect(getType(Array)).toBe('array')
    expect(getType(Hola)).toBe('object')
  })
})

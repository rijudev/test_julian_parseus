import Parser, { Field } from '../src'

class Person {
  @Field({ type: 'string' })
  age?: string

  @Field({ type: 'string', readOnly: true })
  sibilings?: string

  @Field({ type: 'string', defaultValue: '23' })
  default?: string
}

const data = {
  age: 26,
  sibilings: 22,
  default: undefined
}

describe(`Parseus[type=string]`, () => {
  test('should convert number to string', () => {
    const result = Parser(Person).to(data)
    expect(typeof result.age).toBe('string')
    expect(result.age).toBe('26')
  })

  describe(`defaultValue`, () => {
    const result = Parser(Person).to(data)
    test('should set default value', () => {
      expect(result.default).toBe('23')
    })
  })

  describe(`readOnly`, () => {
    const result = Parser(Person).to(data)
    test('should convert to string and not allow mutation', () => {
      expect(typeof result.sibilings).toBe('string')
      result.sibilings = 22
      expect(typeof result.sibilings).toBe('string')
      expect(result.sibilings).toBe('22')
    })

    test('should allow mutation in not readOnly fields', () => {
      result.age = 2
      expect(typeof result.age).not.toBe('string')
    })
  })
})

import Parser, { Field } from '../src'

class Person {
  @Field()
  age?: number

  @Field({ readOnly: true })
  sibilings?: number

  @Field({ defaultValue: 23 })
  default?: number
}

const data = {
  age: '26',
  sibilings: '22',
  default: undefined
}

describe(`Parseus[type=number]`, () => {
  test('should convert string number to number', () => {
    const result = Parser(Person).to(data)
    expect(typeof result.age).toBe('number')
    expect(result.age).toBe(26)
  })

  describe(`defaultValue`, () => {
    const result = Parser(Person).to(data)
    test('should set default value', () => {
      expect(result.default).toBe(23)
    })
  })

  describe(`readOnly`, () => {
    const result: any = Parser(Person).to(data)
    test('should convert to number and not allow mutation', () => {
      expect(typeof result.sibilings).toBe('number')
      result.sibilings = '22'
      expect(typeof result.sibilings).toBe('number')
      expect(result.sibilings).toBe(22)
    })

    test('should allow mutation in not readOnly fields', () => {
      result.age = '2'
      expect(typeof result.age).not.toBe('number')
    })
  })
})

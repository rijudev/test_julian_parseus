import Parser, { Field } from '../src'

class Person {
  @Field({ type: 'number' })
  age?: number

  @Field({ type: 'number', readOnly: true })
  sibilings?: string
}

const data = {
  age: '26',
  sibilings: '22'
}

describe(`Parseus[type=number]`, () => {
  test('should convert string number to number', () => {
    const result = Parser(Person).to(data)
    expect(typeof result.age).toBe('number')
  })

  describe(`readOnly`, () => {
    const result = Parser(Person).to(data)
    test('should convert to number and not allow mutation', () => {
      expect(typeof result.sibilings).toBe('number')
      result.sibilings = '22'
      expect(typeof result.sibilings).toBe('number')
    })

    test('should allow mutation in not readOnly fields', () => {
      result.age = '2'
      expect(typeof result.age).not.toBe('number')
    })
  })
})

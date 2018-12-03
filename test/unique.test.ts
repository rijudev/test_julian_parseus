import Parser, { Field } from '../src'

class Person {
  @Field({ type: 'unique' })
  key?: string

  @Field({ type: 'unique' })
  key2?: string
}

const data = { key2: 23 }

describe(`Parseus[type=unique]`, () => {
  test('should generate an id', () => {
    const result: any = Parser(Person).to(data)
    expect(typeof result.key).toBe('string')
  })

  test('should not generate an id there is a value already', () => {
    const result: any = Parser(Person).to(data)
    expect(result.key2).toBe(23)
  })
})

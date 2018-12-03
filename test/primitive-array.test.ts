import Parser, { Field } from '../src'

class Person {
  @Field()
  name: string
  @Field({ type: 'array', model: String })
  arr: string[]
}

const data = { name: 'julian', arr: [2, 4] }

describe('modlist', () => {
  test('Modlist TX parser', () => {
    const PersonTxParser = Parser(Person)
    const result = PersonTxParser.to(data)
    expect(result.arr[0]).toBe('2')
    expect(result.arr[1]).toBe('4')
  })
})

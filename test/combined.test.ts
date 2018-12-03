import Parser, { Field } from '../src'

class Person {
  @Field({
    type: 'combined',
    combinedDelimiter: '-',
    combinedKeys: ['key', 'key2']
  })
  key?: string

  @Field({ type: 'combined', combinedKeys: ['key2', 'key'] })
  key2?: string
}

const data = { key2: 23, key: 'julian' }

describe(`Parseus[type=combined]`, () => {
  test('should generate values combined', () => {
    const result: any = Parser(Person).to(data)
    expect(result.key).toBe('julian-23')
  })

  test('default delimiter should be ,', () => {
    const result: any = Parser(Person).to(data)
    expect(result.key2).toBe('23,julian')
  })
})

import Parser, { Field } from '../src'

class Person {
  @Field({ type: 'decimal', fixed: 4 })
  age?: number

  @Field({ type: 'decimal' })
  age2?: number
}

const data = {
  age: '26.12345',
  age2: '26.12344',
  age3: '264.12345'
}

describe(`Parseus[type=decimal]`, () => {
  test('should convert string number to decimal fixed 4', () => {
    const result = Parser(Person).to(data)
    expect(result.age).toBe('26.1234')
  })

  test('should convert string number to decimal fixed default 5', () => {
    const result = Parser(Person).to(data)
    expect(result.age2).toBe('26.12344')
  })
})

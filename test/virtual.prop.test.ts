import Parser, { Field } from '../src'

class Person {
  @Field({ isVirtual: true })
  age1?: number

  @Field({ name: 'age2', isVirtual: true })
  age4?: number
}

const data = {
  age1: '26',
  age2: '27'
}

describe(`Parseus[type=number, isVirtual=true]`, () => {
  test('should keep virtual field for to operations and remove in from', () => {
    const result = Parser(Person).to(data)
    const result2 = Parser(Person).from(data)
    expect(result.age1).toBe(26)

    expect(result2.age1).toBe(undefined)
  })

  test('from: remove virtualkey and to:: use custom name', () => {
    const result: any = Parser(Person).to(data)
    const result2: any = Parser(Person).from(data)
    expect(result.age4).toBe(27)

    expect(result2.age4).toBe(undefined)
    expect(result2.age2).toBe(undefined)
  })
})

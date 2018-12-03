import Parser, { Field } from '../src'

class Person {
  @Field({
    name: 'age1',
    afterHook: { to: () => 'whatever', from: () => 'whateverFrom' }
  })
  age?: number

  @Field({
    name: 'age2',
    /** Note that the data will be parsed so should be a format accepted by the parser type */
    beforeHook: { to: () => '23', from: () => '87' }
  })
  beforeAge?: number
}

const data = {
  age1: '26',
  age2: '22'
}

describe(`Parseus[type=number, name=age, afterHook=from/to]`, () => {
  test('should transform with afterHook to', () => {
    const result: any = Parser(Person).to(data)
    expect(result.age).toBe('whatever')
  })

  test('should transform with afterHook from', () => {
    const result: any = Parser(Person).from(data)
    expect(result.age1).toBe('whateverFrom')
  })
})

describe(`Parseus[type=number, name=age, beforeHook=from/to]`, () => {
  test('should transform with beforeHook to', () => {
    const result: any = Parser(Person).to(data)
    expect(result.beforeAge).toBe(23)
  })

  test('should transform with beforeHook from', () => {
    const result = Parser(Person).from(data)
    expect(result.age2).toBe(87)
  })
})

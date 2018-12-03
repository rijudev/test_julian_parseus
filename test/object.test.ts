import Parser, { Field } from '../src'

class SubPerson {
  @Field({ type: 'string' })
  name?: string

  @Field({ type: 'number' })
  age?: number
}

class Person {
  @Field({ type: 'object' })
  person?: SubPerson

  @Field({ type: 'object', defaultValue: { name: 'julian' }, model: SubPerson })
  person2?: { name: string; age: number }

  @Field({ type: 'object', model: SubPerson, readOnly: true })
  person3?: { name: string; age: number }
}

const data: any = {
  person: { name: 22, age: '3' },
  person2: undefined,
  person3: { name: 22, age: '3' }
}

describe(`Parseus[type=object]`, () => {
  test(`should convert object's properties`, () => {
    const result: any = Parser(Person).to(data)
    expect(typeof result.person).toBe('object')
    expect(result.person.name).toBe('22')
    expect(result.person.age).toBe(3)
  })

  describe(`defaultValue`, () => {
    const result: any = Parser(Person).to(data)
    test('should set default value', () => {
      expect(result.person2.name).toBe('julian')
    })
  })

  describe(`readOnly`, () => {
    test(`should convert to object's properties and not allow mutation`, () => {
      const result: any = Parser(Person).to(data)
      result.person3 = undefined
      expect(typeof result.person3).toBe('object')
      expect(result.person3.name).toBe('22')
      expect(result.person3.age).toBe(3)
    })
  })
})

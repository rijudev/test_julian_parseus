import Parser, { Field } from '../src'

class SubPerson {
  @Field({ type: 'string' })
  name?: string

  @Field({ type: 'number' })
  age?: number
}

class Person {
  @Field({ type: 'array', model: SubPerson })
  people?: { name: string; age: number }[]

  @Field({
    type: 'array',
    defaultValue: [{ name: 'julian' }],
    model: SubPerson
  })
  person2?: { name: string; age: number }[]

  @Field({ type: 'array', model: SubPerson, readOnly: true })
  person3?: { name: string; age: number }[]
}

const data: any = {
  people: [{ name: 22, age: '3' }],
  person2: undefined,
  person3: [{ name: 22, age: '3' }]
}

describe(`Parseus[type=array]`, () => {
  test(`should convert array's properties`, () => {
    const result = Parser(Person).to(data)
    expect(Array.isArray(result.people)).toBeTruthy()
    expect(result.people[0].name).toBe('22')
    expect(result.people[0].age).toBe(3)
  })

  describe(`defaultValue`, () => {
    const result = Parser(Person).to(data)
    test('should set default value', () => {
      expect(result.person2[0].name).toBe('julian')
    })
  })

  describe(`readOnly`, () => {
    test(`should convert to array's properties and not allow mutation`, () => {
      const result = Parser(Person).to(data)
      result.person3 = undefined
      expect(Array.isArray(result.person3)).toBeTruthy()
      expect(result.person3[0].name).toBe('22')
      expect(result.person3[0].age).toBe(3)
    })
  })
})

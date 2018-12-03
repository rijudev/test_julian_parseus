import Parser, { Field } from '../src'

class Obj {
  @Field({ name: 'incoming' })
  local?: number
}

class Obj2 {
  @Field()
  local2?: number
}
class Person {
  @Field({ name: 'age2' })
  age?: number

  @Field({})
  deep?: Obj

  @Field({ model: Obj2 })
  deepArr?: Obj2[]
}

const data: any = {
  age2: '26',
  deep: { incoming: '33' },
  deepArr: [{ local2: '44' }]
}

describe(`Parseus[type=number, name=age]`, () => {
  test('should convert string number to number and read from age2 property as age', () => {
    const result: any = Parser(Person).to(data)
    expect(typeof result.age).toBe('number')
    expect(result.age).toBe(26)
  })

  test('From:: should convert string number to number and read from age2 and use age2 as property', () => {
    const result: any = Parser(Person).from(data)
    expect(typeof result.age2).toBe('number')
    expect(result.age2).toBe(26)
  })

  test('From:: should convert deep object prop name', () => {
    const result: any = Parser(Person).from(data)
    const result2: any = Parser(Person).to(data)
    expect(result.deep.incoming).toBe(33)
    expect(result2.deep.local).toBe(33)
  })

  test('deepArr', () => {
    const result: any = Parser(Person).from(data)
    expect(result.deepArr[0].local2).toBe(44)
  })
})

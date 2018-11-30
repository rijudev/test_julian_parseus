import Parser, { PNumber, Field, Parseus } from '../src'

class Person extends Parseus {
  @PNumber()
  age?: number

  @Field({ type: 'number' })
  age2?: number

  @Field({ type: 'number', defaultValue: '44' })
  age3?: number
}

describe(`Parseus - TNumber / type: 'number' :: Extending Parseus`, () => {
  const data = {
    age: '25',
    age2: '24',
    age3: undefined
  }

  const result = Person.to(data)

  test('should convert string number to number', () => {
    expect(result.age).toBe(25)
    expect(result.age2).toBe(24)
  })

  test('should asign default value and convert to number', () => {
    expect(result.age3).toBe(44)
  })
})

describe(`Parseus - TNumber / type: 'number' :: Direct usage`, () => {
  const data = {
    age: '25',
    age2: '24',
    age3: undefined
  }

  const result = Parser(Person).to(data)
  test('should convert string number to number', () => {
    expect(result.age).toBe(25)
    expect(result.age2).toBe(24)
  })

  test('should asign default value and convert to number', () => {
    expect(result.age3).toBe(44)
  })
})

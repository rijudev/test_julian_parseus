import Parser, { PNumber, Field, Parseus } from '../src'

class Person {
  @PNumber()
  age?: number

  @Field({ type: 'number', defaultValue: '44' })
  age3?: number

  @PNumber()
  age2?: number = 4
}

class Person2 extends Parseus {
  @PNumber()
  age?: number

  @Field({ type: 'number', defaultValue: '44' })
  age3?: number
}

const data = {
  age: '25',
  age3: undefined
}

describe(`Parseus - TNumber / type: 'number' :: Direct usage`, () => {
  const result = Parser(Person).to(data)
  test('should convert string number to number', () => {
    expect(result.age).toBe(25)
    expect(result.age3).toBe(44)
  })
})

describe(`Parseus - TNumber / type: 'number' :: Extending Parseus`, () => {
  const result = Person2.to(data)
  test('should convert string number to number', () => {
    expect(result.age).toBe(25)
    expect(result.age3).toBe(44)
  })
})

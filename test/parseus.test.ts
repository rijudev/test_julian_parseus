import parseus, { Field } from '../src/parseus'

function Custom() {
  const type = 'custom'
  const parse = () => 'soy custom klk'

  return Field({ type, parse })
}

class Person {
  @Field({ type: 'number' })
  age = '123'

  @Field({ type: 'string' })
  name = 'unknown'

  @Custom()
  custom = 'custom here'
}

describe('Parseus', () => {
  it('Verify it parses data as expected', () => {
    const julian = { name: 'julian', age: '26', custom: 'nadaquever' }

    const person = parseus(julian).to(Person)

    expect(typeof person.age).toBe('number')
    expect(person.custom).toBe('soy custom klk')
  })
})

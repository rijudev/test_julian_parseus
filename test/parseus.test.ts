import parseus, { Field, TNumber, TString } from '../src'

function Custom() {
  const type = 'custom'
  const parse = () => 'soy custom klk'
  return Field({ type, parse })
}

class Person {
  /**
   * Directly usage
   */
  @Field({ type: 'number' })
  age = '123'

  /**
   * Quick Type usages (Sugar syntax)
   */
  @TString()
  name = 'unknown'

  // TODO: declare this
  // in the decorator,
  // if it is not assigned
  // it doesn't exists
  @TString()
  numberToString = undefined

  /**
   * Quick Type usages (Sugar syntax)
   */
  @TNumber()
  timelapse = '23'

  /**
   * Use default value
   */
  @TNumber()
  default1 = '23'

  /**
   * If people wants to handle custom types
   * within their proyects
   */
  @Custom()
  custom = 'custom here'
}

describe('Parseus', () => {
  const julian = {
    name: 'julian',
    age: '26',
    timelapse: '55',
    default1: null,
    numberToString: 33,
    custom: 'nadaquever'
  }

  const person = parseus(julian).to(Person)

  it('Verify Number conversion', () => {
    expect(typeof person.age).toBe('number')
    expect(typeof person.timelapse).toBe('number')
  })

  it('Verify String conversion', () => {
    expect(person.numberToString).toBe('33')
  })

  it('Verify Custom conversion', () => {
    expect(person.custom).toBe('soy custom klk')
  })

  it('Verify default conversion', () => {
    expect(person.default1).toBe(23)
  })
})

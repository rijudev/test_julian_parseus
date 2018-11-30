import parseus, { Field, TNumber, TString, TObject } from '../src'

function Custom() {
  const type = 'custom'
  const parse = () => 'soy custom klk'
  return Field({ type, parse })
}

class Song {
  @TString()
  name?: string = undefined

  @TNumber()
  rating?: number = undefined

  @TString()
  albumn?: string = undefined
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
  numberToString?: any = undefined

  /**
   * Quick Type usages (Sugar syntax)
   */
  @TNumber()
  timelapse = '23'

  /**
   * Use default value
   */
  @TNumber()
  default1: string | null = '23'

  /**
   * If people wants to handle custom types
   * within their proyects
   */
  @Custom()
  custom = 'custom here'

  @TObject(Song)
  song?: Song = undefined
}

describe('Parseus', () => {
  const julian = {
    name: 'julian',
    age: '26',
    timelapse: '55',
    default1: null,
    numberToString: 33,
    custom: 'nadaquever',
    song: { name: 'Somewhere inside', rating: '35' }
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

  it('Verify nested object conversion', () => {
    expect(person.song).toBeDefined()
    expect(typeof person.song.rating).toBe('number')
  })
})

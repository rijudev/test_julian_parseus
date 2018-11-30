import parseus, { Field, TNumber, TString, TObject, TArray } from '../src'

function Custom() {
  const type = 'custom'
  const parser = () => 'soy custom klk'
  return Field({ type, parser })
}

class Creator {
  @TString()
  name?: string = undefined

  @TNumber()
  age?: number = undefined
}

class Song {
  @TString()
  name?: string = undefined

  @TNumber()
  rating?: number = undefined

  @TString()
  albumn?: string = undefined

  // Testing Deep nested object parsing
  @TObject(Creator)
  creator?: Creator = undefined
}

class Person {
  /**
   * Direct usage
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

  @TArray(Song)
  songs?: Song[] = undefined
}

describe('Parseus', () => {
  const creator = { name: 'creator1', age: '22' }
  const song = { name: 'Somewhere inside', rating: '35', creator }
  const songs = [song, song]
  const julian = {
    name: 'julian',
    age: '26',
    timelapse: '55',
    default1: null,
    numberToString: 33,
    custom: 'nadaquever',
    song,
    songs
  }

  const richard = {
    ...julian,
    name: 'richard'
  }

  const people = [julian, richard]

  const person = parseus(julian).to(Person)
  const personArr = parseus(people).to(Person)

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

  it('Verify object conversion', () => {
    expect(person.song).toBeDefined()
    expect(typeof person.song.rating).toBe('number')
  })

  it('Verify array conversion', () => {
    expect(person.songs).toBeDefined()
    expect(Array.isArray(person.songs)).toBeTruthy()
    expect(person.songs.length).toBe(2)
    expect(typeof person.songs[0].rating).toBe('number')
  })

  it('Verify nested object within array conversion', () => {
    expect(typeof person.songs[0].creator.age).toBe('number')
  })

  it('Verify array entry conversion', () => {
    expect(Array.isArray(personArr)).toBeTruthy()
  })
})

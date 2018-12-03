import Parser, { Field } from '../../src'

interface IConstructor<T> {
  new (): T
}

const ModListGen = <T>(model: IConstructor<T>) => {
  class ModList {
    @Field({ name: 'parent_id' })
    parentId: number

    @Field({ type: 'array', name: 'A', model: model })
    add: T[]

    @Field({ type: 'array', name: 'C', model: model })
    change: T[]

    @Field({ type: 'array', name: 'D', model: model })
    delete: T[]
  }

  return ModList
}

class Person {
  @Field()
  name: string
  @Field()
  id: number
}

const dataToSend = {
  parent_id: '2',
  A: [{ name: 'julian', id: '1' }],
  C: [{ name: 'pedro', id: '3' }],
  D: [{ name: 'juan', id: '4' }]
}

describe('modlist', () => {
  test('Modlist TX parser', () => {
    const PersonTxParser = Parser(ModListGen<Person>(Person))
    const result: any = PersonTxParser.from(dataToSend)
    expect(result.A[0].id).toBe(1)
  })
})

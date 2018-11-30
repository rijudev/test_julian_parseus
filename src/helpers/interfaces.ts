export type Type = 'string' | 'number' | 'custom' | 'object' | 'array'

export interface IOptionsNoType {
  name?: string
  parse?: Function // TODO: define Function
  model?: any // used for objects
  format?: string // used for dates
  maxLength?: number
}

export interface IOptions extends IOptionsNoType {
  type: Type
}

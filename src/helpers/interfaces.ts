export type FieldType = 'string' | 'number' | 'object' | 'array'

export interface IModel<T> {
  new (): T
}

export interface IOptions {
  model?: any
  name?: string
  format?: string
  type: FieldType
  maxLength?: number
  readOnly?: boolean
  defaultValue?: any
}

export interface IParserOptions extends IOptions {
  value?: any
  ctx: any
  key: string
  target: any
}

export interface IParser {
  (options: IParserOptions): any
}

export interface IArgsProcessor<T> {
  ctx: T
  acc: T
  key: string
  target: T
}

export interface IArgsProcess<T> {
  model: IModel<T>
  ctx: T
}

export type Processed<T> = T

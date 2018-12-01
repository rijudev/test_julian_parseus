export type Type = 'string' | 'number' | 'custom' | 'object' | 'array'

export interface IClass {
  new (): void
}
export interface IBaseOptions {
  model?: any
  name?: string
  format?: string
  parser?: IParser
  maxLength?: number
  readOnly?: boolean
  defaultValue?: any
}
export interface IOptions extends IBaseOptions {
  type: Type
}

export interface IParserOptions extends IBaseOptions {
  value?: any
  key: string
  target: any
}

export interface IParser {
  (options: IParserOptions): any
}
export interface IEntriesProcessor<T> {
  meta: { [key: string]: IOptions }
  ctx: T
}
export interface IArgsProcessor<T> {
  acc: T
  key: string
  entries: IEntriesProcessor<T>
}

export type Processed<T> = T

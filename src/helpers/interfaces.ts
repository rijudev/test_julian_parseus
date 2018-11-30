export type Type = 'string' | 'number' | 'custom' | 'object' | 'array'

export interface IClass {
  new (): void
}
export interface IBaseOptions {
  name?: string
  parser?: IParser
  model?: any
  format?: string
  maxLength?: number
}
export interface IOptions extends IBaseOptions {
  type: Type
}

export interface IParserOptions extends IBaseOptions {
  value?: any
  defaultValue?: any
}

export interface IParser {
  (options: IParserOptions): any
}

export interface IEntriesProcessor<T> {
  metaKey: string
  meta: { [key: string]: IOptions }
  ctx: T
}
export interface IArgsProcessor<T> {
  acc: T
  key: string
  entries: IEntriesProcessor<T>
  parsers: { [key in Type]: IParser }
}

export type Processed<T> = T

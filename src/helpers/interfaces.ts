export type FieldType =
  | 'string'
  | 'number'
  | 'object'
  | 'array'
  | 'unique'
  | 'decimal'
  | 'combined'

export interface IModel<T> {
  new (): T
}

export interface IMetadata {
  [key: string]: IOptions
}

export interface IParserHook {
  from?(options: IParserOptions): any
  to?(options: IParserOptions): any
}

export interface IOptions {
  model?: any
  name?: string
  fixed?: number
  format?: string
  type?: FieldType
  precision?: number
  maxLength?: number
  defaultValue?: any
  readOnly?: boolean
  isVirtual?: boolean
  combinedKeys?: string[]
  afterHook?: IParserHook
  beforeHook?: IParserHook
  combinedDelimiter?: string
}

export interface IParserOptions extends IOptions {
  value?: any
  ctx: any
  key: string
  target: any
  isFrom?: any
}

export interface IBaseParserReturn extends IParserOptions {
  targetKey: any
}

export interface IArgsProcessor<T> {
  ctx: T
  acc: T
  key: string
  target: T
  keys: string[]
  metadata: { [key: string]: any }
}

export interface IArgsProcess<T> {
  model: IModel<T>
  target: T
  ctx: T
  metadata: { [key: string]: any }
  keys: string[]
}

export type Processed<T> = T

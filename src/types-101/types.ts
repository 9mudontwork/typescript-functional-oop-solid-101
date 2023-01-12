interface IDataTypes<T> {
  iString: string
  iNumber: number
  iBoolean: boolean
  iNull: null
  iUndeinfed: undefined
  iSymbol: symbol
  iObject: object

  iArray: Array<string>
  iGeneric: Array<T>

  iFunction: () => void

  iUnionType: number | string

  iFunctionGeneric: (val: T) => Array<T>

  iOptionnal?: 'string'
}

type literalT = 'a' | 'b' | 'c'

type PartialDataType = Partial<IDataTypes<string>>
type PickStringNumberDataType = Pick<IDataTypes<string>, 'iString' | 'iNumber'>
type OmitString = Omit<IDataTypes<string>, 'istring'>
type RecordString = Record<string, Array<string>>
type StringOrNumber = NonNullable<string | number | null | undefined>

enum PronounceNumber {
  ONE = '1',
  TWO = '2',
  THREE = '3',
}

const typeNumber = typeof PronounceNumber

type Point = { x: number; y: number }
type P = keyof Point

let a: P

const readOnlyDataType: Readonly<PartialDataType> = {
  iString: 'abcd',
}

// readOnlyDataType.iString = 'asdasd'

import { Bit, TypedArray } from 'models'

export class CreateBitAccessor {
  private array: TypedArray

  constructor(array: TypedArray) {
    this.array = array
  }

  private validate(arrayIndex: number, bitIndex: number) {
    if (arrayIndex < 0) {
      throw new Error('Array index < 0')
    }
    if (this.array.length <= arrayIndex) {
      throw new Error('Array index > array length')
    }

    if (bitIndex < 0) {
      throw new Error('Bit index < 0')
    }

    if (this.array.BYTES_PER_ELEMENT * 8 <= bitIndex) {
      throw new Error('Bit index < 0')
    }
  }

  public get(arrayIndex: number, bitIndex: number): Bit {
    this.validate(arrayIndex, bitIndex)

    return (this.array[arrayIndex] & (1 << bitIndex)) === 0 ? 0 : 1
  }

  public set(arrayIndex: number, bitIndex: number, value: Bit) {
    this.validate(arrayIndex, bitIndex)

    this.array[arrayIndex] = value
      ? this.array[arrayIndex] | (1 << bitIndex)
      : this.array[arrayIndex] & ~(1 << bitIndex)
  }
}

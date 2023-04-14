import { CreateBitAccessor } from './create-bit-accessor'

test('Check get bit', () => {
  const bitAccessor = new CreateBitAccessor(new Uint8Array([0b1110, 0b1101]))
  expect(bitAccessor.get(0, 0)).toBe(0)
  expect(bitAccessor.get(0, 1)).toBe(1)
  expect(bitAccessor.get(1, 0)).toBe(1)
  expect(bitAccessor.get(1, 1)).toBe(0)
})

test('Check set bit', () => {
  const bitAccessor = new CreateBitAccessor(new Uint8Array([0b1110, 0b1101]))
  expect(bitAccessor.get(0, 0)).toBe(0)
  bitAccessor.set(0, 0, 1)
  expect(bitAccessor.get(0, 0)).toBe(1)

  expect(bitAccessor.get(0, 1)).toBe(1)
  bitAccessor.set(0, 1, 0)
  expect(bitAccessor.get(0, 1)).toBe(0)
})

test('Check validation', () => {
  const typedArray = new Uint16Array([0b00001010, 0b11000101])
  const bitAccessor = new CreateBitAccessor(typedArray)
  expect(() => bitAccessor.get(0, typedArray.BYTES_PER_ELEMENT * 8)).toThrow()
  expect(() => bitAccessor.get(0, -1)).toThrow()
  expect(() => bitAccessor.get(typedArray.length, 0)).toThrow()
  expect(() => bitAccessor.get(-1, 0)).toThrow()
})

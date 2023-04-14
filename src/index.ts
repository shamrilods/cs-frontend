import { CreateBitAccessor } from './hw-1'

const bitAccessor = new CreateBitAccessor(new Uint8Array([0b1110, 0b1101]))

console.log(bitAccessor.get(0, 1))
bitAccessor.set(0, 1, 0)
console.log(bitAccessor.get(0, 1))

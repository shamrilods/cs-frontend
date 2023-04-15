export const inverse = (canvas: HTMLCanvasElement): ImageData | null => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 & ~data[i]
    data[i + 1] = 255 & ~data[i + 1]
    data[i + 2] = 255 & ~data[i + 2]
  }
  ctx.putImageData(imageData, 0, 0)
  return imageData
}

export const grayscale = (canvas: HTMLCanvasElement): ImageData | null => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
    data[i] = avg
    data[i + 1] = avg
    data[i + 2] = avg
  }
  ctx.putImageData(imageData, 0, 0)
  return imageData
}

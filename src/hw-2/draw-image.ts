import { loadImage } from 'utils/load-image'

export const drawImage = async (
  urlImage: string,
  canvas: HTMLCanvasElement,
) => {
  try {
    const img = await loadImage(urlImage)
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx?.drawImage(img, 0, 0)
  } catch (err) {
    console.error(err)
  }
}

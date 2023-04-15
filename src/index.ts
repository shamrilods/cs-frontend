import img from './assets/images/8k.jpeg'
import { grayscale, inverse, drawImage } from './hw-2'

import './style.scss'

const init = async () => {
  const canvasRoot = document.querySelector('#canvas-root')
  const inverseBtn = document.querySelector('#inverse-btn')
  const grayscaleBtn = document.querySelector('#grayscale-btn')
  const resetBtn = document.querySelector('#reset-btn')

  if (!canvasRoot) return
  const canvas = document.createElement('canvas')
  canvasRoot.appendChild(canvas)
  await drawImage(img, canvas)

  const handleResetBtnClick = async () => {
    await drawImage(img, canvas)
  }

  const handleInverseBtnClick = async () => {
    await handleResetBtnClick()
    inverse(canvas)
  }
  const handleGrayscaleBtnClick = async () => {
    await handleResetBtnClick()
    grayscale(canvas)
  }

  inverseBtn?.addEventListener('click', handleInverseBtnClick)
  grayscaleBtn?.addEventListener('click', handleGrayscaleBtnClick)
  resetBtn?.addEventListener('click', handleResetBtnClick)
}

init()

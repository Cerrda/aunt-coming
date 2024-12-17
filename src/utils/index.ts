import { DESIGN_HEIGHT } from '@/../configs/ui'

export function getImgUrl(name: string) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

export function getLottieUrl(name: string) {
  return new URL(`../assets/lottie/${name}`, import.meta.url).href
}

export function px2vh(px: number) {
  return `${((px * 100.0) / DESIGN_HEIGHT).toFixed(5)}vh`
}

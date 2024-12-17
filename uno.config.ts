import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['center', 'flex justify-center items-center'],
    [/^size(\d+)$/, ([, c]) => `w${c} h${c}`],
  ],
  rules: [[/^flex-([.\d]+)$/, ([_, num]) => ({ flex: `${num}` })]],
  theme: {
    colors: {
      primary: 'var(--van-primary-color)',
      primaryLight: 'var(--van-primary-light-color)',
      secondary: 'var(--van-secondary-color)',
    },
    spacing: {
      normal: 'var(--van-gap)',
      tabbar: 'var(--van-tabbar-height)',
    },
    borderRadius: {
      normal: 'var(--van-gap)',
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetRemToPx({ baseFontSize: 4 }),
  ],
})

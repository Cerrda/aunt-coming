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

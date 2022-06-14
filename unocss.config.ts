import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography({
      cssExtend: {
        // reset both pre and code first to override default
        'pre,code': {
          background: '',
        },
        pre: {
          background: '#222',
        },
        'html.dark pre': {
          background: '#111',
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

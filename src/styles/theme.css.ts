import { createTheme } from '@vanilla-extract/css'
import { baseColors } from './mixins/colors'
import { spaces } from './mixins/sizes'
import { fontSizes, fonts } from './mixins/fonts'
import { breakpoints } from './mixins/mq'

export const [themeClass, vars] = createTheme({
  colors: baseColors,
  spaces,
  fonts,
  fontSizes,
  breakpoints,
  shadows: {
    sm: '0px 0px 4px 1px rgba(0,0,0, 0.08)',
    base: '0 0 6px 1px rgba(0,0,0, 0.08)',
    md: '0px 0px 8px 1px rgba(0,0,0, 0.08)',
    lg: '0px 0px 14px 2px rgba(0,0,0, 0.08)',
  },
})

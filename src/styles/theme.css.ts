import { createTheme } from '@vanilla-extract/css'
import { baseColors } from './mixins/colors'
import { spaces, shadows, sizes, containers } from './mixins/sizes'
import { fontSizes, fonts } from './mixins/fonts'
import { breakpoints } from './mixins/mq'

export const [themeClass, vars] = createTheme({
  colors: baseColors,
  fonts,
  fontSizes,
  breakpoints,
  spaces,
  sizes,
  containers,
  shadows,
})

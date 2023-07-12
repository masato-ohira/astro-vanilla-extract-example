import { colors, rgba } from '@/styles/mixins/colors'
import { fontSizes } from '@/styles/mixins/fonts'
import { spaces } from '@/styles/mixins/sizes'
import { style } from '@vanilla-extract/css'

export const header = style({
  borderBottom: `1px solid ${rgba('#000', 0.07)}`,
})

export const heroBody = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${spaces['4']} ${spaces['6']}`,
})

export const headerLogo = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  columnGap: '12px',
  lineHeight: 1.1,
  fontSize: fontSizes['3xl'],
  fontWeight: 'bold',
})

export const headerIcon = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  color: colors.teal[700],
  fontSize: fontSizes['4xl'],
})

export const headerLink = style({
  display: 'block',
  color: '#222',
  textDecoration: 'none',
})

export const headerMenu = style({
  color: colors.teal[700],
  fontSize: fontSizes['3xl'],
})

//   &__menu {
//     color: vars.$link;
//     @include fonts.rem(24);
//   }
// }

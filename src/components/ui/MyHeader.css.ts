import { colors, rgba } from '@/styles/mixins/colors'
import { fontSizes } from '@/styles/mixins/fonts'
import { spaces } from '@/styles/mixins/sizes'
import { style } from '@vanilla-extract/css'

export const headerCss = {
  header: style({
    borderBottom: `1px solid ${rgba('#000', 0.07)}`,
  }),

  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spaces['4']} ${spaces['6']}`,
  }),

  logo: style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: '12px',
    lineHeight: 1.1,
    fontSize: fontSizes['3xl'],
    fontWeight: 'bold',
  }),

  icon: style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    color: colors.teal[700],
    fontSize: fontSizes['4xl'],
  }),

  link: style({
    display: 'block',
    color: '#222',
    textDecoration: 'none',
  }),

  menu: style({
    color: colors.teal[700],
    fontSize: fontSizes['3xl'],
  }),
}

//   &__menu {
//     color: vars.$link;
//     @include fonts.rem(24);
//   }
// }

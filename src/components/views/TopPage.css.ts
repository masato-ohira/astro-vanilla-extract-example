import { fontSizes } from '@/styles/mixins/fonts'
import { css } from '@/utils/css'

const center = `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const indexCss = {
  box: css`
    ${center}
    background-color: #eee;
    padding: 40px;
    font-size: ${fontSizes['5xl']};
    margin: 40px 0;
  `,
}

import { containers } from '@/styles/mixins/sizes'
import { css } from '@/utils/css'

export const containerCss = css`
  width: 100%;
  max-width: ${containers.xl};
  margin: 0 auto;
  padding: 0 15px;
`

// const footerCss = css`
//   background-color: #222;
//   color: #fff;
// `

import { footerCss } from './MyFooter.css'

export const MyFooter = () => {
  return (
    <div className={footerCss}>
      <p>&copy; example.com</p>
    </div>
  )
}

{
  /* <style lang='scss'>
  .c-my-footer {
    background-color: #444;
    color: #fff;
    padding: 30px;
    text-align: center;
  }
</style> */
}

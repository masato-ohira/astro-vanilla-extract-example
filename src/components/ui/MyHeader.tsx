import { MyIcon } from '@/components/icons/MyIcon'
import { headerCss } from './MyHeader.css'

export const MyHeader = () => {
  return (
    <div className={headerCss.header}>
      <div className='hero is-small'>
        <div className={headerCss.wrap}>
          <div className={headerCss.logo}>
            <div className={headerCss.icon}>
              <MyIcon name={'react'} />
            </div>
            <div>
              <a className={headerCss.link} href='/'>
                DemoSite
              </a>
            </div>
          </div>

          <div className={headerCss.menu}>
            <MyIcon name={'menu'} />
          </div>
        </div>
      </div>
    </div>
  )
}

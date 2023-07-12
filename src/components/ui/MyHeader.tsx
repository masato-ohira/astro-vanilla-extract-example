import { MyIcon } from '@/components/icons/MyIcon'
import {
  header,
  headerIcon,
  headerLink,
  headerLogo,
  headerMenu,
  heroBody,
} from './MyHeader.css'

export const MyHeader = () => {
  return (
    <div className={header}>
      <div className='hero is-small'>
        <div className={heroBody}>
          <div className={headerLogo}>
            <div className={headerIcon}>
              <MyIcon name={'react'} />
            </div>
            <div>
              <a className={headerLink} href='/'>
                DemoSite
              </a>
            </div>
          </div>

          <div className={headerMenu}>
            <MyIcon name={'menu'} />
          </div>
        </div>
      </div>
    </div>
  )
}

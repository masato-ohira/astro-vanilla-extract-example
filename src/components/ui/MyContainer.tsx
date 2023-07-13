import type { ReactNode } from 'react'
import { containerCss } from './MyContainer.css'
import {} from '@vanilla-extract/css'

type ContainerProps = {
  className?: string
  children?: ReactNode
}

export const MyContainer = (props: ContainerProps) => {
  const classNames = [containerCss, props.className || ''].join(' ')

  return <div className={classNames}>{props.children}</div>
}

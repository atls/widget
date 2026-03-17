import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const ChecksIcon = (props: IconProps): ReactNode => {
  const { className, style, otherProps } = iconSprinkles(props)
  const iconStyle = {
    ...style,
    ...otherProps.style,
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 32 32'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...otherProps}
    >
      <path
        fill='currentColor'
        fillOpacity={0.7}
        d='M21.293 9.293a1 1 0 0 1 1.414 1.414l-13 13a1 1 0 0 1-1.414 0l-6-6-.068-.076a1 1 0 0 1 1.406-1.406l.076.068L9 21.586zM28.293 9.293a1 1 0 0 1 1.414 1.414l-13 13a1 1 0 0 1-1.338.069l-.076-.069-1.5-1.5-.068-.076a1 1 0 0 1 1.406-1.406l.076.068.793.793z'
      />
      <path
        fill='currentColor'
        fillOpacity={0.7}
        d='M8.293 15.293a1 1 0 0 1 1.338-.068l.076.068 1.5 1.5.069.076a1 1 0 0 1-1.407 1.407l-.076-.069-1.5-1.5-.068-.076a1 1 0 0 1 .068-1.338'
      />
    </svg>
  )
}

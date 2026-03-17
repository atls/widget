import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const LogOutIcon = (props: IconProps): ReactNode => {
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
        d='M16 3a1 1 0 1 1 0 2h-6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a1 1 0 1 1 0 2h-6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z'
      />
      <path
        fill='currentColor'
        fillOpacity={0.7}
        d='M20.293 10.293a1 1 0 0 1 1.338-.068l.076.068 5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L23.586 17H15a1 1 0 0 1 0-2h8.586l-3.293-3.293-.068-.076a1 1 0 0 1 .068-1.338'
      />
    </svg>
  )
}

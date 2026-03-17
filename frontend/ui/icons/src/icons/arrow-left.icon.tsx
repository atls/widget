import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const ArrowLeftIcon = (props: IconProps): ReactNode => {
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
        d='M13.37 6.225a1 1 0 0 1 1.406 1.406l-.069.076-7.298 7.298H27a1 1 0 0 1 0 2H7.42l7.287 7.288a1 1 0 0 1-1.414 1.414l-9-9a1 1 0 0 1 0-1.414l9-9z'
      />
    </svg>
  )
}

import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const AtlantisSolidIcon = (props: IconProps): ReactNode => {
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
        fillRule='evenodd'
        d='M11.69 5.916A4.32 4.32 0 0 1 16 2a4.32 4.32 0 0 1 4.31 3.916l.289 3.168a14.1 14.1 0 0 0 5.952 10.258l2.615 1.834a4.29 4.29 0 0 1 1.254 5.67 4.34 4.34 0 0 1-5.564 1.756l-2.91-1.339a14.23 14.23 0 0 0-11.893 0l-2.909 1.339a4.34 4.34 0 0 1-5.564-1.755 4.29 4.29 0 0 1 1.254-5.671l2.615-1.834a14.1 14.1 0 0 0 5.953-10.259z'
        clipRule='evenodd'
      />
    </svg>
  )
}

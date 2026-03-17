import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const ExclamationIcon = (props: IconProps): ReactNode => {
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
        d='M16.001 22a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2M16.001 8c.552 0 1 .448 1 1v10a1.001 1.001 0 0 1-2 0V9a1 1 0 0 1 1-1'
      />
      <path
        fill='currentColor'
        fillOpacity={0.7}
        fillRule='evenodd'
        d='M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2m0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4'
        clipRule='evenodd'
      />
    </svg>
  )
}

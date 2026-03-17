import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const ChevronSmallUpIcon = (props: IconProps): ReactNode => {
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
        d='M21.293 19.707a1 1 0 1 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6-.068.076a1 1 0 0 0 1.406 1.407l.076-.069L16 14.414z'
      />
    </svg>
  )
}

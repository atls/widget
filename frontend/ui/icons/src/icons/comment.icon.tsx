import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const CommentIcon = (props: IconProps): ReactNode => {
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
        d='M28 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h3a1 1 0 0 1 1 1v3.057l5.419-3.87.133-.08A1 1 0 0 1 16 23h10a2 2 0 0 0 2-2zm2 15a4 4 0 0 1-4 4h-9.68l-6.739 4.814A1 1 0 0 1 8 29v-4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z'
      />
    </svg>
  )
}

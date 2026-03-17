import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const MentionIcon = (props: IconProps): ReactNode => {
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
        d='M15.084 2.03A14 14 0 0 1 29.732 13.27l.084.463c.38 2.319.17 4.686-.598 6.883-.682 1.954-2.741 2.754-4.543 2.412a3.85 3.85 0 0 1-2.6-1.826 7.98 7.98 0 0 1-6.075 2.8 8 8 0 1 1 7.912-6.826 1 1 0 0 1-.016.133l-.03.14a8 8 0 0 1-.084.398l-.209 1.007a1.86 1.86 0 0 0 1.476 2.209c1.068.203 2-.301 2.28-1.106.658-1.883.84-3.912.513-5.9l-.072-.397a12 12 0 0 0-12.555-9.633A12 12 0 1 0 22 26.393a1 1 0 0 1 1 1.731 14 14 0 0 1-18.106-3.601A14.001 14.001 0 0 1 15.084 2.03M16 10a6 6 0 1 0 5.83 7.416l.077-.372q.091-.51.093-1.044a6 6 0 0 0-6-6'
        clipRule='evenodd'
      />
    </svg>
  )
}

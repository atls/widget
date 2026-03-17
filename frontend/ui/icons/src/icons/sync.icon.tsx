import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const SyncIcon = (props: IconProps): ReactNode => {
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
        d='M3.325 19.058a1 1 0 0 1 1.224.547l.036.095.147.429a12 12 0 0 0 3.94 5.374l.365.27a12 12 0 0 0 6.288 2.209l.452.016a12 12 0 0 0 6.436-1.731l.383-.242A12 12 0 0 0 26.39 22H25a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.793a14 14 0 0 1-4.305 4.488l-.447.283a14 14 0 0 1-7.508 2.02l-.528-.02a14 14 0 0 1-7.336-2.576l-.424-.315a14 14 0 0 1-4.598-6.27l-.171-.5-.028-.098a1 1 0 0 1 .67-1.161M9.305 3.704a14 14 0 0 1 15.294 1.248l.41.331a14 14 0 0 1 4.151 5.94l.17.499.026.098a1 1 0 0 1-1.894.609l-.036-.096-.147-.428a12 12 0 0 0-3.557-5.09l-.35-.285a12 12 0 0 0-13.503-.845A12 12 0 0 0 5.61 10H7a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v1.79a14 14 0 0 1 4.847-4.824z'
      />
    </svg>
  )
}

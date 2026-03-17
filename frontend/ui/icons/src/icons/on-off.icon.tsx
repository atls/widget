import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const OnOffIcon = (props: IconProps): ReactNode => {
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
        d='M21.634 4.241a1 1 0 0 1 1.275-.412l.09.047.494.298a14 14 0 0 1 5.441 6.469l.21.537a14 14 0 0 1-4.172 15.566l-.45.361a14 14 0 0 1-16.58.341l-.465-.34a14 14 0 0 1-4.84-6.93l-.16-.555a14 14 0 0 1 .588-8.98l.233-.529A14 14 0 0 1 9 3.876l.09-.047A1 1 0 0 1 10 5.607l-.423.256a12 12 0 0 0-4.465 5.092l-.2.453a12 12 0 0 0-.503 7.698l.138.475a12 12 0 0 0 4.148 5.94l.398.293a12 12 0 0 0 14.212-.294l.386-.31a12 12 0 0 0 3.575-13.342l-.18-.46a12 12 0 0 0-4.663-5.545L22 5.607l-.086-.055a1 1 0 0 1-.28-1.31'
      />
      <path
        fill='currentColor'
        fillOpacity={0.7}
        d='M16 2a1 1 0 0 1 1 1v13a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1'
      />
    </svg>
  )
}

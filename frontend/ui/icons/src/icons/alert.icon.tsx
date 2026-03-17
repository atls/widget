import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const AlertIcon = (props: IconProps): ReactNode => {
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
        d='M16 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 10a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1'
      />
      <path
        fill='currentColor'
        fillOpacity={0.7}
        fillRule='evenodd'
        d='M12.528 4.063c1.535-2.687 5.41-2.687 6.945 0l10.831 18.953.133.252C31.706 25.887 29.805 29 26.831 29H5.17c-3.072 0-4.998-3.317-3.474-5.984zm5.209.992c-.768-1.344-2.705-1.344-3.473 0L3.434 24.008C2.67 25.341 3.633 27 5.17 27h21.66c1.488 0 2.438-1.557 1.804-2.866l-.066-.126z'
        clipRule='evenodd'
      />
    </svg>
  )
}

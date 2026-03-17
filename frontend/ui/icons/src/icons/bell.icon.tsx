import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const BellIcon = (props: IconProps): ReactNode => {
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
        d='M15.5 2C21.299 2 26 6.701 26 12.5v4.394c0 .55.143 1.092.417 1.57l1.74 3.048c1.144 2-.3 4.488-2.604 4.488h-5.582a4.5 4.5 0 0 1-8.943 0H5.446c-2.303 0-3.747-2.488-2.605-4.488l1.742-3.047.095-.183c.211-.431.322-.906.322-1.388V12.5C5 6.701 9.7 2 15.5 2m-2.45 24a2.501 2.501 0 0 0 4.9 0zM15.5 4A8.5 8.5 0 0 0 7 12.5v4.394c0 .787-.18 1.562-.524 2.266l-.157.297-1.741 3.047A1 1 0 0 0 5.446 24h20.107a1 1 0 0 0 .869-1.496l-1.742-3.047a5.17 5.17 0 0 1-.68-2.563V12.5A8.5 8.5 0 0 0 15.5 4'
        clipRule='evenodd'
      />
    </svg>
  )
}

import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const AtlantisIcon = (props: IconProps): ReactNode => {
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
        d='M16 2a4.32 4.32 0 0 1 4.31 3.916l.289 3.168a14.1 14.1 0 0 0 5.952 10.258l2.615 1.834a4.29 4.29 0 0 1 1.254 5.67 4.34 4.34 0 0 1-5.565 1.756l-2.909-1.338a14.23 14.23 0 0 0-11.892 0l-2.91 1.338a4.34 4.34 0 0 1-5.564-1.755 4.29 4.29 0 0 1 1.254-5.671l2.615-1.834a14.1 14.1 0 0 0 5.952-10.259l.29-3.167A4.32 4.32 0 0 1 16 2m0 2a2.32 2.32 0 0 0-2.288 1.88l-.03.218-.289 3.167A16.1 16.1 0 0 1 6.958 20.72l-.36.26-2.615 1.834a2.29 2.29 0 0 0-.672 3.029l.12.186a2.34 2.34 0 0 0 2.879.756l2.909-1.339.405-.18a16.24 16.24 0 0 1 13.16.18l2.908 1.34.21.083a2.34 2.34 0 0 0 2.79-1.026l.1-.195a2.29 2.29 0 0 0-.598-2.699l-.176-.135-2.615-1.834a16.1 16.1 0 0 1-6.749-11.274l-.047-.44-.288-3.168A2.32 2.32 0 0 0 16 4'
      />
    </svg>
  )
}

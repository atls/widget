import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const UserIcon = (props: IconProps): ReactNode => {
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
        d='M11.541 17.007c.442.03.874.159 1.282.336A8 8 0 0 0 16 18a8 8 0 0 0 2.808-.508l.369-.15c.408-.176.84-.305 1.282-.335l.19-.007H22a7 7 0 0 1 7 7v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a7 7 0 0 1 7-7h1.35zM10 19a5 5 0 0 0-5 5v3a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3a5 5 0 0 0-5-5h-1.35c-.146 0-.363.041-.677.178A10 10 0 0 1 16 20a10 10 0 0 1-3.51-.635l-.463-.187c-.314-.137-.531-.178-.676-.178zM16 2a6 6 0 0 1 6 6v2a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4'
        clipRule='evenodd'
      />
    </svg>
  )
}

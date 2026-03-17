import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const GithubIcon = (props: IconProps): ReactNode => {
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
        d='M16 2C8.266 2 2 8.264 2 15.996c0 6.194 4.008 11.425 9.572 13.278.7.122.962-.296.962-.664 0-.333-.016-1.435-.016-2.607C9 26.651 8.09 25.145 7.81 24.36c-.158-.403-.84-1.645-1.436-1.977-.49-.262-1.19-.91-.016-.928 1.102-.017 1.89 1.014 2.152 1.436 1.26 2.116 3.272 1.521 4.078 1.154.122-.91.49-1.522.892-1.872-3.114-.35-6.37-1.557-6.37-6.91 0-1.523.542-2.783 1.436-3.763-.14-.35-.63-1.783.14-3.708 0 0 1.17-.367 3.848 1.435a13 13 0 0 1 3.5-.474c1.192 0 2.38.158 3.5.474 2.678-1.82 3.85-1.435 3.85-1.435.77 1.925.28 3.358.14 3.708.894.98 1.436 2.223 1.436 3.763 0 5.37-3.272 6.56-6.388 6.909.508.439.946 1.278.946 2.59 0 1.872-.018 3.377-.018 3.85 0 .366.262.803.962.663A14.03 14.03 0 0 0 30 15.996C30 8.264 23.736 2 16 2'
      />
    </svg>
  )
}

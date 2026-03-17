import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'

import { iconSprinkles }  from '../icon.css.js'

export const QuestionMarkIcon = (props: IconProps): ReactNode => {
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
        d='M16 22a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 8.02c1.547 0 2.834.425 3.74 1.286.909.864 1.306 2.049 1.306 3.305 0 1.497-.947 2.558-1.748 3.319-.209.198-.423.39-.625.57-.206.183-.4.353-.582.524-.279.26-.505.494-.678.717l-.155.219a1.8 1.8 0 0 0-.235.675 2 2 0 0 0-.024.25v.061h-.001l.001.099a1 1 0 0 1-1.986.114l-.011-.102v-.002l-.001-.003v-.007L15 19.028l-.001-.048.001-.153c.004-.124.015-.294.045-.491.058-.387.194-.928.524-1.447l.126-.188c.304-.43.677-.807 1.03-1.138.205-.19.418-.38.618-.557q.305-.27.578-.527c.761-.723 1.125-1.27 1.125-1.868 0-.837-.257-1.45-.685-1.856-.433-.411-1.169-.735-2.361-.735-1.276 0-1.984.478-2.395.945a2.85 2.85 0 0 0-.575 1.023l-.043.17a1 1 0 1 1-1.974-.316l.036-.182a4.8 4.8 0 0 1 1.056-2.018c.78-.885 2.028-1.621 3.895-1.621'
      />
      <path
        fill='currentColor'
        fillOpacity={0.7}
        fillRule='evenodd'
        d='M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2m0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4'
        clipRule='evenodd'
      />
    </svg>
  )
}

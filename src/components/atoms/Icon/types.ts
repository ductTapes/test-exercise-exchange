import React, { CSSProperties, MouseEventHandler, SVGProps } from 'react'

export interface IconProps {
  component: React.FC<SVGProps<SVGElement>>
  className?: string
  onClick?: MouseEventHandler<SVGElement>
  viewBox: `${number} ${number} ${number} ${number}`
  style?: CSSProperties
  width?: number
  height?: number
}

export type GetComponentPropsType = () => {
  className: IconProps['className']
  onClick: IconProps['onClick']
  style: IconProps['style']
  viewBox: `${number} ${number} ${number} ${number}`
  width?: number
  height?: number
}

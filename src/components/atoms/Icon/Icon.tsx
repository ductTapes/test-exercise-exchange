'use client'

import React from 'react'
import { GetComponentPropsType, IconProps } from './types'

const Icon = React.memo(function Icon(props: IconProps): JSX.Element {
  const { component: IconComponent, className, onClick, viewBox, style, width, height } = props

  const getComponentProps: GetComponentPropsType = () => {
    const res: ReturnType<GetComponentPropsType> = {
      className: className,
      onClick,
      style,
      viewBox,
    }

    if (typeof width === 'number' && width >= 0) {
      res.width = width
    }

    if (typeof height === 'number' && height >= 0) {
      res.height = height
    }

    return res
  }

  return <IconComponent {...getComponentProps()} />
})

export default Icon

'use client'

import React from 'react'
import clsx from 'src/helpers/clsx'

import { TextFieldProps } from './types'
import './styles.css'

const TextField: React.FC<TextFieldProps> = props => {
  const { value, className = '', ...otherProps } = props

  return <input {...otherProps} className={clsx('textField', className)} />
}

export default TextField

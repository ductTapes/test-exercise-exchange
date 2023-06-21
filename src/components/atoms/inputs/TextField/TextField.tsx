'use client'

import './styles.css'
import React from 'react'
import { TextFieldProps } from './types'
import clsx from '../../../../helpers/clsx'

const TextField: React.FC<TextFieldProps> = props => {
  const { value, className = '', ...otherProps } = props

  return <input {...otherProps} className={clsx('textField', className)} />
}

export default TextField

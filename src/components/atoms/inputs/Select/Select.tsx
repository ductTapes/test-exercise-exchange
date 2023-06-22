'use client'

import React from 'react'
import clsx from 'src/helpers/clsx'

import { SelectProps } from './types'
import './styles.css'

const Select: React.FC<SelectProps> = props => {
  const { options, value, className = '', placeholder, ...otherProps } = props

  return (
    <select {...otherProps} value={value} className={clsx('select', className)}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select

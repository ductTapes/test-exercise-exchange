'use client'

import './styles.css'
import React from 'react'
import { SelectProps } from './types'
import clsx from '../../../../helpers/clsx'

const Select: React.FC<SelectProps> = props => {
  const { options, value, className = '', placeholder, ...otherProps } = props

  return (
    <select {...otherProps} className={clsx('select', className)}>
      {placeholder && (
        <option value="" disabled selected={!value}>
          {placeholder}
        </option>
      )}

      {options.map(option => (
        <option key={option.value} value={option.value} selected={value === option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select

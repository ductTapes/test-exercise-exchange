import { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
  name: string
  value: string
  onChange: SelectHTMLAttributes<HTMLSelectElement>['onChange']
  placeholder?: string
}

interface Option {
  value: string
  label: string
}

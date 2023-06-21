import { InputHTMLAttributes } from 'react'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  placeholder?: string
}

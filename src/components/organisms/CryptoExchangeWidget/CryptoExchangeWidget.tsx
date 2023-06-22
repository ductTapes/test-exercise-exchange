'use client'

import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import clsx from 'src/helpers/clsx'
import Select from 'src/components/atoms/inputs/Select'
import Icon from 'src/components/atoms/Icon'
import { ArrowRepeatIcon } from 'src/components/atoms/Icon/svg'
import TextField from 'src/components/atoms/inputs/TextField'

import { CryptoExchangeWidgetProps, SetValuesByNameType, Values } from './types'
import './styles.css'

const CryptoExchangeWidget: React.FC<CryptoExchangeWidgetProps> = props => {
  const { className = '', rates, updateDate } = props

  const [values, setValues] = useState<Values>({ from: '', to: '', amount: '' })

  const setValuesByName = useCallback<SetValuesByNameType>((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }, [])

  const calculateResult = () => {
    const numberAmount = Number((values.amount || '').replace(/,/g, '.'))

    if (values.from === values.to) {
      return numberAmount
    }

    if (numberAmount > 0 && values.from && values.to) {
      return (numberAmount / rates[values.from]) * rates[values.to]
    }

    return 0
  }

  return (
    <div className={clsx('cryptoExchangeWidget', className)}>
      <p className="cryptoExchangeWidget_date">Update date: {updateDate}</p>
      <div className="cryptoExchangeWidget_selectContainer">
        <Select
          placeholder="Select currency"
          value={values.from}
          onChange={e => {
            setValuesByName('from', e.target.value)
          }}
          name="from"
          options={Object.keys(rates).map(currency => ({ value: currency, label: currency }))}
        />

        <div
          className="cryptoExchangeWidget_reverseIconContainer"
          onClick={() => {
            setValues(prev => ({ ...prev, from: values.to, to: values.from }))
          }}
        >
          <Icon component={ArrowRepeatIcon} viewBox="0 0 16 16" />
        </div>

        <Select
          placeholder="Select currency"
          value={values.to}
          onChange={e => {
            setValuesByName('to', e.target.value)
          }}
          name="to"
          options={Object.keys(rates).map(currency => ({ value: currency, label: currency }))}
        />
      </div>
      <div className="cryptoExchangeWidget_resultContainer">
        <TextField
          className="cryptoExchangeWidget_textField"
          name="amount"
          value={values.amount}
          onChange={e => {
            setValuesByName('amount', e.target.value)
          }}
        />

        <p className="cryptoExchangeWidget_result">Result: {calculateResult()}</p>
      </div>
      <Link
        className="cryptoExchangeWidget_apiLink"
        target="_blank"
        href="https://exchangerate.host/#/"
      >
        api home
      </Link>
    </div>
  )
}

export default CryptoExchangeWidget

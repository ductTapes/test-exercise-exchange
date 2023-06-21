'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'src/helpers/clsx'
import Select from 'src/components/atoms/inputs/Select'
import Icon from 'src/components/atoms/Icon'
import { ArrowRepeatIcon } from 'src/components/atoms/Icon/svg'
import TextField from 'src/components/atoms/inputs/TextField'

import { CryptoExchangeWidgetProps } from './types'
import './styles.css'

const CryptoExchangeWidget: React.FC<CryptoExchangeWidgetProps> = props => {
  const { className = '', rates, updateDate } = props

  const [fromValue, setFromValue] = useState<string | undefined>()
  const [toValue, setToValue] = useState<string | undefined>()
  const [amount, setAmount] = useState<string | undefined>()

  const calculateResult = () => {
    const numberAmount = Number((amount || '').replace(/,/g, '.'))

    if (fromValue === toValue) {
      return numberAmount
    }

    if (numberAmount > 0 && fromValue && toValue) {
      return (numberAmount / rates[fromValue]) * rates[toValue]
    }

    return 0
  }

  console.log('amount', amount)

  return (
    <div className={clsx('cryptoExchangeWidget', className)}>
      <p className="cryptoExchangeWidget_date">Update date: {updateDate}</p>
      <div className="cryptoExchangeWidget_selectContainer">
        <Select
          placeholder="Select currency"
          value={fromValue}
          onChange={e => {
            setFromValue(e.target.value)
          }}
          name="from"
          options={Object.keys(rates).map(currency => ({ value: currency, label: currency }))}
        />

        <div
          className="cryptoExchangeWidget_reverseIconContainer"
          onClick={() => {
            setFromValue(toValue)
            setToValue(fromValue)
          }}
        >
          <Icon component={ArrowRepeatIcon} viewBox="0 0 16 16" />
        </div>

        <Select
          placeholder="Select currency"
          value={toValue}
          onChange={e => {
            setToValue(e.target.value)
          }}
          name="to"
          options={Object.keys(rates).map(currency => ({ value: currency, label: currency }))}
        />
      </div>
      <div className="cryptoExchangeWidget_resultContainer">
        <TextField
          className="cryptoExchangeWidget_textField"
          name="amount"
          value={amount}
          onChange={e => {
            setAmount(e.target.value)
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

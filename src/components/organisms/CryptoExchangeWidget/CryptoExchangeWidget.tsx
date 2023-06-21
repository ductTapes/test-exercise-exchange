'use client'

import React, { useState } from 'react'
import { CryptoExchangeWidgetProps } from './types'
import './styles.css'
import clsx from '../../../helpers/clsx'
import Select from '../../atoms/inputs/Select'
import Icon from '../../atoms/Icon'
import { ArrowRepeatIcon } from '../../atoms/Icon/svg'

const CryptoExchangeWidget: React.FC<CryptoExchangeWidgetProps> = props => {
  const { className = '', rates, updateDate } = props

  const [fromValue, setFromValue] = useState<string | undefined>()
  const [toValue, setToValue] = useState<string | undefined>()

  return (
    <div className={clsx('cryptoExchangeWidget', className)}>
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
    </div>
  )
}

export default CryptoExchangeWidget

export interface CryptoExchangeWidgetProps {
  className?: string
  updateDate: string
  rates: Record<string, number>
}

export interface Values {
  from: string
  to: string
  amount: string
}

export type SetValuesByNameType = (name: keyof Values, value: any) => void

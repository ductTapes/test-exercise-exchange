import { EXCHANGE_RATE_ROUTE } from 'src/crud/exchangerate/constants'

export const fetchGetExchangeRates = () => fetch(EXCHANGE_RATE_ROUTE)

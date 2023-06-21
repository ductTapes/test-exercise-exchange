import { EXCHANGE_RATE_ROUTE } from 'src/api/exchangerate/constants'

export const fetchGetExchangeRates = () => fetch(EXCHANGE_RATE_ROUTE)

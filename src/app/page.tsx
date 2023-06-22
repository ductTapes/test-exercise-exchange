import CryptoExchangeWidget from 'src/components/organisms/CryptoExchangeWidget'
import { fetchGetExchangeRates } from 'src/crud/exchangerate/exchangerate.crud'

import './styles.css'

const getCryptoRates = async () => {
  const response = await fetchGetExchangeRates()

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}

export default async function Home() {
  const cryptoRates = await getCryptoRates()

  return (
    <div>
      <CryptoExchangeWidget
        className="homePage_cryptoExchangeWidget"
        rates={cryptoRates.rates}
        updateDate={cryptoRates.date}
      />
    </div>
  )
}

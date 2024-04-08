const GetCurrencyData = async (fromCurrency, toCurrency) => {
    try {
        const fetch = await import('node-fetch')
        // Request to external API endpoint with query params
        const response = await fetch.default(
            `https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`
        )
        if (!response.ok) {
            throw new Error('Failed to fetch currency')
        }
        const currencyConversion = await response.json()

        // Extract and filter external data
        const relevantData = {
            name: currencyConversion[`${fromCurrency}${toCurrency}`].name,
            high: currencyConversion[`${fromCurrency}${toCurrency}`].high,
            create_date:
                currencyConversion[`${fromCurrency}${toCurrency}`].create_date,
        }
        return relevantData
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { GetCurrencyData }

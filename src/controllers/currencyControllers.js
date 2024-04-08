const { GetCurrencyData } = require('../services/currencyServices.js')

const GetConversion = async (req, res) => {
    // Extract from query params
    const { fromCurrency, toCurrency } = req.query

    // Call service
    try {
        const currencyData = await GetCurrencyData(fromCurrency, toCurrency)
        res.status(200).json(currencyData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { GetConversion }

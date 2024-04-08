const calculateConversion = async () => {
    // Values from currency inputs
    const fromCurrency = document.getElementById('currency-from').value
    const toCurrency = document.getElementById('currency-to').value
    const amountFrom = parseFloat(document.getElementById('amount-from').value)

    // Check if both currencies are the same
    if (fromCurrency === toCurrency) {
        // If the currencies are the same, display an error message
        document.getElementById('result').innerText = 'Please select different currencies';
        return; // Exit the function
    }

    // AJAX fetch request to server
    try {
        const response = await fetch(
            `/convert?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch currency data')
        }

        // Update DOM data with received data
        const data = await response.json()
        const convertedAmount = (amountFrom * parseFloat(data.high)).toFixed(2)

        document.getElementById(
            'result'
        ).innerText = `Quotation: ${data.high} | Generated on: ${data.create_date}`

        document.getElementById('amount-to').innerText = `${convertedAmount}`

        // Error case
    } catch (error) {
        console.error('Error fetching currency data:', error.message)
        document.getElementById('result').innerText = 'Quote not available'
    }
}

// Convert button click event listener
document
    .getElementById('converter-button')
    .addEventListener('click', calculateConversion)

const express = require('express')
const path = require('path')
const currencyRoutes = require('./routes/currencyRoutes.js')

const app = express()
const port = 3000

app.use(express.json())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Route
app.use('/', currencyRoutes)

// Server
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

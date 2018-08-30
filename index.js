const express = require('express')
const config = require('config')

const app = express()
const PORT = config.get('server.port')

app.use(express.static('public'))
app.listen(PORT, () =>
    console.log(`Speech Recognition demo app is listening on port ${PORT}!`)
)
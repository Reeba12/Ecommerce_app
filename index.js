require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(cors())

const PORT = process.env.PORT || 8000

app.use('/api', require('./routes'))

app.use(express.json({ limit: '50mb' }))

app.use(express.urlencoded({
  limit: '500mb',
  extended: true,
  parameterLimit: 50000
}))

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})

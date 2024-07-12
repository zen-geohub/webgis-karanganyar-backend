const express = require('express')
const app = express()

const connectDB = require('./db')
connectDB()

const router = require('./src/routes')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))

const cors = require('cors')
app.use(cors())
require('dotenv').config()

const port = process.env.PORT || 3099

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
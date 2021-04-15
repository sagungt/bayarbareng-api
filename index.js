const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./config/database')
const ENV = require('./env')
const api = require('./routes/api')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

try {
    db.authenticate()
    console.log('connection established')
} catch (err) {
    console.log('unable to connect: ', err);
}

app.use('/api/v1', api)

app.listen(ENV.serverPort, () => console.log(`Testing on ${ENV.serverPort}`))
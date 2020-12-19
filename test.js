const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const server = {
    PORT: 8000
}

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const router = require('./router.js')
app.use('/api/v1', router)

app.listen(server.PORT, () => console.log(`Testing on ${server.PORT}`))
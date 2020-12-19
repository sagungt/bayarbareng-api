const jwt = require('jsonwebtoken')
const db = require('../dummy.js')

module.exports = {
    validateRegister: (req, res, next) => {
        if (!req.body.name || req.body.name.length < 4) return res.status(400).send({ msg: 'Username at least 4 characters' })
        if (!req.body.password || req.body.password.length < 8) return res.status(400).send({ msg: 'Password at least 8 characters' })
        if (!req.body.password_repeat || req.body.password != req.body.password_repeat) return res.status(400).send({ msg: 'Password didn\'t match' })
        next()
    },
    // login access using authorization
    isLoggedIn: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(
                token,
                'BayarBarengSecret'
            )
            req.userData = decoded
            next()
        } catch (err) {
            return res.status(401).send({ msg: 'Your session is not valid' })
        }
    },
    // login access using cookies
    isLoggedInCookie: (req, res, next) => {
        const token = req.cookies.token || ''
        try {
            if (!token) return res.status(401).send({ msg: 'You need to login' })
            next()
        } catch (err) {
            return res.status(500).send({ msg: err })
        }
    },
    repeatPassword: (req, res, next) => {
        if (!req.body.password_repeat || req.body.password !== req.body.password_repeat) return res.status(400).send({ msg: 'Password didn\'t match' })
        next()
    },
    subscriptionList: (req, res, next) => {
        const services = db.Paket.data.map(e => e.nama_paket)
        if (!services.some(e => e === req.body.langganan)) return res.status(401).send({ msg: 'Service not available yet' })
        next()
    }
}
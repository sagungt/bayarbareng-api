const express = require('express')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')
const db = require('./dummy.js')

const router = express.Router()
const userMiddleware = require('./middleware/users.js')

// admin signup
router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
    if (db.Admin.data.some(e => e.email === req.body.email)) {
        return res.status(409).send({ msg: 'Email already used' })
    } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).send({ msg: err })
            } else {
                db.Admin.data.push({
                    id: uuid.v4(),
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                })
                return res.status(201).send({ msg: 'Registered' })
            }
        })
    }
})

// admin login
router.post('/login', (req, res, next) => {
    if (!db.Admin.data.some(e => e.email === req.body.email)) return res.status(400).send({ msg: 'Username not found' })
    else {
        const user = db.Admin.data.find(e => e.email === req.body.email)
        bcrypt.compare(req.body.password, user.password, (bErr, bResult) => {
            if (bErr) return res.status(401).send({ msg: 'Wrong username or password' })
            if (bResult) {
                const token = jwt.sign({
                    id: user.id,
                    username: user.name,
                    email: user.email
                },
                    'BayarBarengSecret',
                    { expiresIn: '1h' })
                return res.status(200)
                    .cookie(
                        'token',
                        token,
                        {
                            expires: new Date(Date.now() + 3600000),
                            secure: false, // true if https
                            httpOnly: true
                        })
                    .send({
                        msg: 'Logged in',
                        token,
                        user: user
                    })
            }
            return res.status(401).send({ msg: 'Wrong username or password' })
        })
    }
})

// get all data add Authorization in headers 'Bearer $token'
router.get('/all', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send({ admin: db.Admin.data, customer: db.Customer.data, paket: db.Paket.data })
})

// list of admins
router.get('/list-admin', (req, res, next) => {
    res.send(db.Admin.data)
})

// list of customers
router.get('/list-customer', (req, res, next) => {
    res.send(db.Customer.data)
})

// list of packages
router.get('/list-paket', (req, res, next) => {
    res.send(db.Paket.data)
})

// delete admin user
router.delete('/admin/:id', userMiddleware.isLoggedInCookie, (req, res, next) => {
    if (!db.Admin.data.some(e => e.id === req.params.id)) return res.status(400).send({ msg: 'User not found' })
    else {
        const id = db.Admin.data.findIndex(e => e.id === req.params.id)
        db.Admin.data.splice(id, 1)
        return res.status(200).send({ msg: 'Deleted' })
    }
})

// edit admin user
router.post('/admin/:id', userMiddleware.isLoggedInCookie, userMiddleware.repeatPassword, (req, res, next) => {
    if (!db.Admin.data.some(e => e.id === req.params.id)) return res.status(400).send({ msg: 'User not found' })
    else {
        const id = db.Admin.data.findIndex(e => e.id === req.params.id)
        db.Admin.data[id] = {
            id: req.params.id,
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        return res.status(200).send({ msg: 'Edited' })
    }
})

// add new customer
router.post('/customer', userMiddleware.isLoggedInCookie, userMiddleware.subscriptionList, (req, res, next) => {
    if (db.Customer.data.some(e => e.email === req.body.email)) return res.status(400).send({ msg: 'Already subscribe' })
    else {
        db.Customer.data.push({
            id: db.Customer.data.length + 1,
            email: req.body.email,
            langganan: req.body.langganan,
            lama_langganan: req.body.lama_langganan
        })
        return res.status(201).send({ msg: 'Added 1 customer' })
    }
})

// delete customer
router.delete('/customer/:id', userMiddleware.isLoggedInCookie, (req, res, next) => {
    if (!db.Customer.data.some(e => e.id === req.params.id)) return res.status(400).send({ msg: 'Customer not found' })
    else {
        const id = db.Customer.data.findIndex(e => e.id === req.params.id)
        db.Customer.data.splice(id, 1)
        return res.status(200).send({ msg: 'Deleted' })
    }
})

// edit customer
router.post('/customer/:id', userMiddleware.isLoggedInCookie, userMiddleware.subscriptionList, (req, res, next) => {
    if (!db.Customer.data.some(e => e.id === req.params.id)) return res.status(400).send({ msg: 'User not found' })
    else {
        const id = db.Customer.data.findIndex(e => e.id === req.params.id)
        db.Customer.data[id] = {
            id: req.params.id,
            email: req.body.email,
            langganan: req.body.langganan,
            lama_langganan: req.body.lama_langganan
        }
        return res.status(200).send({ msg: 'Edited' })
    }
})

module.exports = router
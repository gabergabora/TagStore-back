const express = require('express')
const router = express.Router()

///////////all routes of admin/////////////
const user = require('./admin/usesr')
router.use('/users', user)

const seller = require('./admin/sellers')
router.use('/sellers', seller)

const product = require('./admin/products')
router.use('/products', product)

const order = require('./admin/orders')
router.use('/orders', order)

module.exports = router;
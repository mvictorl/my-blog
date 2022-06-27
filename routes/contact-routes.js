const express = require('express')
const createPath = require('../utils/create-path')
const route = express.Router()
const { getContactPage } = require('../controllers/contact-controller')

route.get('/contacts', getContactPage)

module.exports = route

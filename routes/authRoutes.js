let express = require('express')
let rout = express.Router()

const authController = require('../controllers/authController')

rout.get('/login', authController.showLoginForm)

rout.post('/login', authController.login)

module.exports = rout
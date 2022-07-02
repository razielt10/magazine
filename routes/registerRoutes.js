let express = require('express')
const { body } = require('express-validator');
let rout = express.Router()

const controller = require('../controllers/registerController')

rout.get('/register', controller.showRegisterForm)

rout.post('/register', [
    body('name').isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 letras'),
    body('email').isEmail().withMessage('Email inválido')
], controller.register)

module.exports = rout
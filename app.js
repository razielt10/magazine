//Trayendo a nuestra aplicación el paquete Express.
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// requiero mis controladores
const mainController = require('./controllers/mainController')

// requiero las rutas
const authRoutes = require('./routes/authRoutes')
const registerRoutes = require('./routes/registerRoutes')

//Express como herramienta de servidor para node.
const app = express()

//configurar mis archivos estaticos para css e img
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

//rutas
app.get('/', mainController.index)

// usando rutas de modulos
app.use('/', authRoutes)
app.use('/', registerRoutes)


//Instanciando el servidor y habilitando que escuche en un puerto.
app.listen(4000, () => {
   console.log('servidor corriendo');
})

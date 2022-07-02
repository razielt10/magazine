const path = require('path')

const controller = {
    showLoginForm: function(req, res) {
        return res.render(path.join(__dirname, '../views/login'))
    },

    login: function(req, res) {
        // validar datos en crudo
            // si hay errores deberia de mostrar esos errores en el html
    
        // conectarme a la BD para verificar que el usuario exista
    
        // si no existe el usuario muestro un error
    
        // si existe el usuario quiero redirigir al perfil
        return res.send(req.body)
    }
}

module.exports = controller
const path = require('path')
const { validationResult } = require('express-validator');

const controller = {
    showRegisterForm: function(req, res) {
        return res.render(path.join(__dirname, '../views/register'))
    },

    register: function(req, res) {
        // validar datos en crudo
        const errors = validationResult(req);
        // si hay errores deberia de mostrar esos errores en el html(ejs)
        if (!errors.isEmpty()) {
            return res.render(path.join(__dirname, '../views/register'), {
                errors: errors.mapped(),
                data: req.body,
            })
        }
            
    
        // conectarme a la BD para verificar que el usuario exista
    
        // si no existe el usuario muestro un error
    
        // si existe el usuario quiero redirigir al perfil
        return res.send(req.body)
    }
}

module.exports = controller
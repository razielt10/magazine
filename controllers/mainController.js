const path = require('path')

module.exports = {
    index: function(req, res) {
        const rutaDelArchivo = path.join(__dirname, '../views/index')

        return res.render(rutaDelArchivo);

    }
}
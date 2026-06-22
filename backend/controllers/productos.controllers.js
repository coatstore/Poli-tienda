const model = require('../models/productos.models')

class ProductosController{

    static async obtenerProductos(request, response){
        const productos = await model.obtenerProductos()
        response.json({
            productos
        })
    }


}

module.exports = ProductosController
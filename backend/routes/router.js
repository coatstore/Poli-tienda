const express = require('express')
const router =express.Router()
const controller = require('../controllers/productos.controllers')


router.get('/productos', controller.obtenerProductos)

module.exports = router
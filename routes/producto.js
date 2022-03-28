//rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');


//api/pruductos
router.post('/', productoController.crearProducto);//router.post('/controllers', productoController.crearProducto)
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);






module.exports = router;
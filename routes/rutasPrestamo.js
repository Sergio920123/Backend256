const express = require ('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController')

 



// RUTAS DEL CRUD 
router.post('/', prestamoController.agregarPrestamos); // el metodo post es agregar
router.get('/', prestamoController.buscarPrestamos); // metodo mostar clientes 
router.get('/:id', prestamoController.mostarPrestamo);  // metodo buscar 1 clente
//router.patch('/:id', prestamoController.modificarPrestamos);   //metodo bu   clente y modificar metodo patch esta comentado para no generar error
router.put('/:id', prestamoController.actualizarPrestamos);  // actualizar clientres metodo put
router.delete('/:id', prestamoController.eliminarPrestamos);  // Eliminar Clientes


module.exports = router;
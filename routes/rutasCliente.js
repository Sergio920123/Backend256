const express = require ('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');



// RUTAS DEL CRUD 
router.post('/', clienteController.agregarClientes); // el metodo post es agregar
router.get('/', clienteController.buscarClientes); // metodo mostar clientes 
router.get('/:id', clienteController.mostarCliente);  // metodo buscar 1 clente
//router.patch('/:id', clienteController.modificarClientes);   //metodo bu   clente y modificar metodo patch esta comentado para no generar error
router.put('/:id', clienteController.actualizarClientes);  // actualizar clientres metodo put
router.delete('/:id', clienteController.eliminarClientes);  // Eliminar Clientes


module.exports = router;
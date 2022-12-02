const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoController')

//este mostrara los datos como una tabla
router.get('/', alumnoController.mostrar)

//cuando le demos click en registrara mandra los datos a esta direccionpara hacer el registro
router.post('/crear', alumnoController.crear)

//y cuando le demos en eliminar tomara el id de la tabla, lo rerijira a la direccion y lo eliminara
//y terminando de eliminarlo regresara a raiz
router.get('/borrar/:id', alumnoController.borrar)


router.post('/editar', alumnoController.editar)

module.exports = router
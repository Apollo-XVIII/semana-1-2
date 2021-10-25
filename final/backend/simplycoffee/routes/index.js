import express from 'express';
const router = express.Router();

const apiRouterUsuario = require('./api/usuario.js');
const apiRouterReceta = require('./api/receta.js');
const apiRouterPreparacion = require('./api/preparacion.js');

router.use('/usuario', apiRouterUsuario);
router.use('/receta', apiRouterReceta);
router.use('/preparacion', apiRouterPreparacion);

module.exports = router;
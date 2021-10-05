import express from 'express';
const router = express.Router();

const apiRouterUsuario = require('./api/usuario.js');

router.use('/usuario', apiRouterUsuario);

module.exports = router;
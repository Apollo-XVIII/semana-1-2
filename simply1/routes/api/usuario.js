import express from 'express';
const router = express.Router();

const usuarioController = require('../../controllers/UsuarioController');
// const auth = require('../../middlewares/auth');

//Privado
router.post('/add', usuarioController.add);
// router.get('/add', auth.VerificarAdministrador, UsuarioController.add);
router.get('/list', usuarioController.list);
router.put('/update/:id', usuarioController.update);
router.put('/activate', usuarioController.activate);
router.put('/deactivate', usuarioController.deactivate);

//Publico
router.post('/login', usuarioController.login);

module.exports = router;
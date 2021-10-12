import express from 'express';
const router = express.Router();

const recetaController = require('../../controllers/RecetaController');

//Privado
router.post('/add', recetaController.add);
router.get('/list', recetaController.list);
router.get('/listOne/:id', recetaController.listOne);
// router.put('/update/:id', recetaController.update);

module.exports = router;
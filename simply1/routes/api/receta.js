import express from 'express';
const router = express.Router();

const recetaController = require('../../controllers/RecetaController');

//Privado
router.post('/add', recetaController.add);
router.put('/update', recetaController.update);
router.get('/list', recetaController.list);
router.get('/listOne/:id', recetaController.listOne);
router.delete('/remove/', recetaController.remove);

module.exports = router;
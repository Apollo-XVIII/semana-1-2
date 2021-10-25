import express from 'express';
const router = express.Router();

const preparacionController = require('../../controllers/PreparacionController');

//Privado
router.post('/add', preparacionController.add);
router.put('/update', preparacionController.update);
router.get('/list', preparacionController.list);
router.get('/listOne/:id', preparacionController.listOne);
router.delete('/remove/', preparacionController.remove);

module.exports = router;
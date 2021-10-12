import express from 'express';
const router = express.Router();

const preparacionController = require('../../controllers/PreparacionController');

//Privado
router.post('/add', preparacionController.add);
router.get('/list', preparacionController.list);
router.get('/listOne/:id', preparacionController.listOne);
// router.put('/update/:id', preparacionController.update);

module.exports = router;
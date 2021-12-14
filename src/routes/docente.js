const router = require('express').Router();

const docenteController = require('../controllers/docenteController');

router.get('/', docenteController.listD);
router.post('/add', docenteController.saveD);
router.get('/update/:id', docenteController.editD);
router.post('/update/:id', docenteController.updateD);
router.get('/delete/:id', docenteController.deleteD);


module.exports = router;


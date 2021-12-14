const router = require('express').Router();

const docenteController = require('../controllers/docenteController');

router.get('/', docenteController.list);
router.post('/add', docenteController.save);
router.get('/update/:id', docenteController.edit);
router.post('/update/:id', docenteController.update);
router.get('/delete/:id', docenteController.delete);


module.exports = router;


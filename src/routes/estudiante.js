const router = require('express').Router();

const estudianteController = require('../controllers/estudianteController');

router.get('/', estudianteController.list);
router.post('/add', estudianteController.save);
router.get('/update/:id', estudianteController.edit);
router.post('/update/:id', estudianteController.update);
router.get('/delete/:id', estudianteController.delete);

module.exports = router;


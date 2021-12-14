const router = require('express').Router();

const estudianteController = require('../controllers/estudianteController');

router.get('/', estudianteController.list);
router.post('/addes', estudianteController.save);
router.get('/updates/:id', estudianteController.edit);
router.post('/updates/:id', estudianteController.update);
router.get('/deletes/:id', estudianteController.delete);

module.exports = router;


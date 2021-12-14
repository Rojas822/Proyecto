const router = require('express').Router();

const estudianteController = require('../controllers/estudianteController');

router.get('/', estudianteController.list);
router.post('/addestudiante', estudianteController.save);
router.get('/updateestudiante/:id', estudianteController.edit);
router.post('/updateestudiante/:id', estudianteController.update);
router.get('/deleteestudiante/:id', estudianteController.delete);

module.exports = router;


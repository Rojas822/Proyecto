const express=require('express');
const router =express.Router();

const customerC=require('../controllers/customercontroller');
router.get('/',customerC.list);
router.post('/add',customerC.save);
router.get('/delete',customerC.delete);
module.exports=router;
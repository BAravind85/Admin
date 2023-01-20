const express=require('express');
const router=express.Router();
const adminController=require('../controller/adminController')
// const {authentication} = require('../middleware/authentication')

router.post('/admin', adminController.createAdmin);
router.post('/login', adminController.adminLogin);



module.exports = router;
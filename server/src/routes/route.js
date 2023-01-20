const express=require('express');
const router=express();
const adminController=require('../controller/adminController')
// const companyController= require('../controller/companiesController')
// const {authentication} = require('../middleware/authentication')

//admin registartion and login
router.set('view engine','ejs');
router.set('views','./views/admin');

//* register
router.get('/register', adminController.createAdmin);
router.post('/register',adminController.insertAdmin)

//*login
router.get('/',adminController.loginLoad)
router.get('/login',adminController.loginLoad)
router.post('/login',adminController.verifylogin)

router.get('/company',adminController.company)


module.exports = router;
//*http://127.0.0.1:3000/login
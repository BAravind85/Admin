const express=require('express');
const router=express();
const adminController=require('../controller/adminController')


const multer=require('multer');
const path =require('path');



router.set('view engine','ejs');
router.set('views','./views/admin');

//* register
router.get('/register', adminController.createAdmin);
router.post('/register',adminController.insertAdmin)

//*login
router.get('/',adminController.loginLoad)
router.get('/login',adminController.loginLoad)
router.post('/login',adminController.verifylogin)

router.get('/company',adminController.companyLoad)

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, '../public'));
    },
    filename:function(req,file,cb){
        const name = Date.now()+ '-' +file.originalname;
        cb(null,name)
    }
})
const upload = multer({storage:storage})
router.post('/company',upload.single("image"),adminController.insertCompanies)
module.exports = router;

const Admins = require('../model/adminModel');
const bcrypt = require('bcrypt');
const Companies = require('../model/companiesModel');
const securePassword=async (password)=>{
    try{
        const passwordHash=await bcrypt.hash(password,10)
        return passwordHash;
    }catch(err){
        console.log(err.message);
    }
}

const createAdmin = async function (req,res){
    try{
        res.render('registration')
    }catch(err){
        console.log(err.message)
    }
}
const insertAdmin=async (req,res)=>{
    try{
        const spassword=await securePassword(req.body.password);
        const user=new Admins({
            name:req.body.name,
            email:req.body.email,
            password:spassword
        })
        const userData=await user.save()
        if(userData){
            res.render('registration',{message:"Your registartion has been successfully"})
        }else{
            res.render('registration',{message:"Your registartion has been failed"});
        }
    }catch(err){
        console.log(err.message)
    }
}

const loginLoad = async (req, res) => {
    try{
        res.render('login')
    }catch(err){
        console.log(err.message)
    }
}

const verifylogin = async (req,res)=>{
    try{
        let email=req.body.email;
        let password=req.body.password;
        const userData = await Admins.findOne({email:email});

        if(userData){
        const passwordMatch= await bcrypt.compare(password,userData.password)
            if(passwordMatch){
                
                res.redirect('/company')
            }else{
                res.render('login',{message:'check the password'})
            }
        }else{
            res.render('login',{message:"Email or password is incorrect"})
        }
    }catch(err){
        console.log(err.message)
    }
}
const companyLoad=async (req,res)=>{
    try{
        res.render('company')
    }catch(err){
        console.log(err.message)
    }
}
const insertCompanies=async(req,res)=>{
    try{
        const companyData= new Companies({
            name:req.body.name,
            email:req.body.email,
            logo:req.file.filename,
            website:req.body.website
        })
        const data = await companyData.save()
        if(data){
            res.render('company',{message:'Successfully submitted your response'})
        }else{
            res.render('company',{message:'Sorry! Something went wrong'})
        }
    }catch(err){
        console.log(err.message)
    }
}
module.exports = {createAdmin,insertAdmin,loginLoad,verifylogin,companyLoad,insertCompanies}
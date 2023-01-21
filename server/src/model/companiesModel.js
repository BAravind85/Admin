const mongoose=require('mongoose');

const companySchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
       trim:true,
        unique:true
    },
    logo:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true,
        trim:true,
    }
},{timestamps:true})

module.exports =mongoose.model('Companies',companySchema)
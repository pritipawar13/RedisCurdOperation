const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')
const UserSchema=new mongoose.Schema({
    Firstname:{
        type:String,
        required :true,
    },
    Lastname:{
        type:String,
        required :true,
    },
    Email:{
        type: String,
        required :true,

    },
    Usertype:{
        type: String,
        required:true
    },
    Password:{
        type:String,
        required :true
    }
})

const user=mongoose.model('TodoUser',UserSchema);
module.exports=user;
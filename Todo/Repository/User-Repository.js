const router = require('express').Router();
const TodoUser = require('../Model/User');

const CheckUser = async(email) => {
   return await TodoUser.findOne({ Email: email })  
}

const GetAllUser= async ()=>{
     return await TodoUser.find({});
  }

const GetPerticularUserDetails = async (userid) =>{
   return await TodoUser.findById({ _id : userid})
}
const GetUserByUsingToken = async(token) =>{
    return await TodoUser.find({ Email :token.Email})
}
module.exports={
    GetAllUser,
    CheckUser,
    GetPerticularUserDetails,GetUserByUsingToken
}
const express = require('express') ;
const BodyParser = require('body-parser')
const RedisConnection = require('../Helper/RedisConnection');

const AddUser = async (req,res) => {
    try{
    var id = req.body.id ;
    var FullName = req.body.FullName;
    var Email= req.body.Email ;
    var PhoneNumber = req.body.PhoneNumber;
    var Gender = req.body.Gender
    var data = RedisConnection.hmset('users',[ 'id' ,id,
    'FullName',FullName ,
    'Email' ,Email ,
    'PhoneNumber' ,PhoneNumber ,
    'Gender' ,Gender ] ,(err,data) => {
        if (err) console.log(err)
        else{
            res.status(201).json({
                Sucess : true,
                status :201,
                Message : 'All Data  Added into Redis',
                Data :data
            }) 
            console.log(data) 
        }
    })
    console.log(data) 
  }catch(err){
      console.log(err)
  }
}

const  GetUser = async (req,res) => {
    try{
        var id = req.params.userid ;
        var data = await RedisConnection.hgetall(id,(err ,data) => {
            if(err) console.log(err);
            else{
                console.log(data);
                res.status(200).json({
                    Sucess : true ,
                    Message : `details information of user ${id}`,
                    Data :data
                })  
            }
        })  
    }catch(err){
        console.log(err)
    }
}

const DeleteUser = async(req,res) => {
    try{
        var id = req.params.userid ;
        await RedisConnection.del(id ,(err ,data ) => {
            if(err) console.log(err);
            else{
                console.log(data);
                res.status(200).json({
                    Sucess : true,
                    status :200,
                    Message : 'user deleted Sucessfully ...'
                })
            }
        })
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    AddUser,
    GetUser,
    DeleteUser
}
const router = require('express').Router();
const UserTask = require('../Model/Tasks');

const AddTask =async (req,res,next) =>{
    if(req.body.Completed === false){
    const newtask= new UserTask({
        userid: req.params.userid,
        Username : req.body.username,
        TaskName : req.body.taskname,
        Completed : req.body.Completed
    })
    newtask.save();
    res.status(201).json({
        status :201,
        success :true,
        message : `${req.body.username} Created Newly task`
    })
  }
  if(req.body.Completed === true){
    res.status(400).json({
        status :400,
        success :false,
        message : `${req.body.username} Firstly You Have to Created New task`
    }) 
  }
}
// get all task which are created by perticular username.
const ShowTask = async(req,res,next) =>{
    UserTask.find({Username : req.params.username}).exec((err,data)=>{
        res.status(200).json({
            status :200,
            success :true,
            Data : data
        }) 
    })
}

const MarkCompleted = async(req,res,next) =>{
    if(req.body.completed !== true || !req.body.completed){
        res.status(200).json({
            status :200,
            success :false,
            message : ` ${req.params.taskid} Not Completed There Task ...`
        }) 
    }
    await UserTask.findByIdAndUpdate({ _id : req.params.taskid },{ $set :{ Completed :req.body.completed , CompletedTime: new Date()}})
   res.status(200).json({
    status :200,
    success :true,
    message : ` ${req.params.taskid} Completed Task ...`
    }) 
  }

const ShowAllCompletedTask = async(req,res,next) => {
    await UserTask.find({ Completed :true}).exec((err,data) =>{
        res.status(200).json({
            status :200,
            success :true,
            message :'All Completed Task ... ' ,
            Data : data
        })  
    })
}

const ShowUncompletedTask = async(req,res,next) =>{
  await UserTask.find({Completed :false}).exec((err,data) => {
      res.status(200).json({
          status:200,
          success :true,
          Message :' All Uncompleted Task..',
          Data :data
      })
  })  
}

const RemoveAllCompletedTask = async(req,res,next) => {
    await UserTask.findOneAndDelete({ Completed:true}).exec()
    res.status(200).json({
        status :200,
        success :true,
        message : ' Successfully Completed Task '
    })
}

const UserAndTask = async(req,res,next) =>{
    await UserTask.find({userid:req.params.userid}).populate({ path: 'User', select: 'Firstname Lastname Email Type' }).exec((err, result) => {
        res.json(result);
      });

}



module.exports={
    AddTask,
   ShowTask,
   MarkCompleted,
   ShowAllCompletedTask,
   ShowUncompletedTask,
   RemoveAllCompletedTask,
   UserAndTask
}

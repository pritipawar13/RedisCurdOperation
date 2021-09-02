const router = require('express').Router();
const UserTask = require('../Model/Tasks');
const TaskRepository = require('../Repository/Task-Repository')

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
       let response = await TaskRepository.ShowAllTasks(req.params.username)
        res.status(200).json({
            status :200,
            success :true,
            Data : response
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
    await TaskRepository.MarkCompletedTask(req.params.taskid , req.body.completed)
    res.status(200).json({
    status :200,
    success :true,
    message : ` ${req.params.taskid} Completed Task ...`
    }) 
  }

const ShowAllCompletedTask = async(req,res,next) => {
    let response = await TaskRepository.ShowAllCompletedTask()
    res.status(200).json({
        status :200,
        success :true,
        message :'All Completed Task ... ' ,
        Data : response
    })  
}

const ShowUncompletedTask = async(req,res,next) => {
    const response = await TaskRepository.ShowUncompletedTask()
      res.status(200).json({
          status:200,
          success : true,
          Message :' All Uncompleted Task..',
          Data : response
      }) 
}

const RemoveAllCompletedTask = async(req,res,next) => {
    await TaskRepository.RemoveAllCompletedTask()
    res.status(200).json({
        status :200,
        success :true,
        message : ' Successfully Completed Task '
    })
}

const UserAndTask = async(req,res,next) => {
   let response = await TaskRepository.UserAndTask(req.params.userid);
   res.status(200).json({
    status :200,
    success :true,
    data : response
})

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

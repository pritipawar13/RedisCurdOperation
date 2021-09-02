const express = require('express');
const UserTask = require('../Model/Tasks');

const ShowAllTasks = async (username) => {
    return UserTask.find({Username : username})
}
const MarkCompletedTask = async (taskid,completed) => {
   return await UserTask.findByIdAndUpdate({ _id : taskid },{ $set :{ Completed :completed , CompletedTime: new Date()}})
}

const ShowAllCompletedTask = async () =>{
   return await UserTask.find({ Completed :true})
}

const ShowUncompletedTask = async () => {
    return await UserTask.find({Completed :false})
}

const RemoveAllCompletedTask = async () => {
   return await UserTask.findOneAndDelete({ Completed:true})
}

const UserAndTask = async (userid) =>{
    return await UserTask.find({userid: userid}).populate({ path: 'User', select: 'Firstname Lastname Email Type' })
}
module.exports = {
    ShowAllTasks,
    MarkCompletedTask,
    ShowAllCompletedTask,
    ShowUncompletedTask,
    RemoveAllCompletedTask,
    UserAndTask
}
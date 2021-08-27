const mongoose=require('mongoose');
const connection=require('../Helper/db')
const Schema=mongoose.Schema;
const TaskSchema=new mongoose.Schema({
    userid: mongoose.Schema.Types.ObjectId,
    Username:String,
    TaskName:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    Completed:Boolean,
    CompletedTime :{
        type: Date,
        default: new Date()
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  })
TaskSchema.virtual('User', {
    ref: 'TodoUser',
    localField: 'userid',
    foreignField: '_id',
    justOne: true,
  });

const task=mongoose.model('UserTasks',TaskSchema)
module.exports=task

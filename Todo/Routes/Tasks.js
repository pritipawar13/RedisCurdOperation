const router = require('express').Router();
const { AddTask , ShowTask, MarkCompleted, ShowAllCompletedTask,RemoveAllCompletedTask,UserAndTask} = require('../Controller/Task-Controller')

router.post('/add-new-task/:userid', AddTask);
router.get('/task-of-user/:username',ShowTask);
router.put('/mark-completed-task/:taskid',MarkCompleted);
router.get('/all-completed-task',ShowAllCompletedTask);
router.delete('/remove-all-completed-task',RemoveAllCompletedTask);
router.get('/user-info-and-task/:userid',UserAndTask);




module.exports=router
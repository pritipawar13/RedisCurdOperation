const router = require('express').Router()
const UserController = require('../Controller/User-Controller');

router.post('/add-new-user' ,UserController.AddUser );
router.get('/user-details/:userid' ,UserController.GetUser);
router.delete('/delete-specific-user/:userid', UserController.DeleteUser)

module.exports = router;
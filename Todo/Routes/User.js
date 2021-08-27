const express = require('express');
const router = express.Router();
const { RegisterUser ,LoginUser ,GetAllUserDetails ,GetPerticularUser} = require('../Controller/User-controller');


router.post('/register-new-user', RegisterUser);
router.post('/login-new-user', LoginUser);
router.get('/get-all-user',GetAllUserDetails);
router.get('/get-perticular-user/:userid', GetPerticularUser);


module.exports= router;
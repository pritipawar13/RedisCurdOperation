const express=require('express');
const app=express()
const port=process.env.PORT ||2000;
//const user=require('./Model/User.js')
app.use(express.json())

const addUser=require('./Routes/User')
const tasks=require('./Routes/Tasks')


app.use(addUser)
app.use(tasks)

app.listen(port,function(){
    console.log(`Server is Running on ${port}`)
})
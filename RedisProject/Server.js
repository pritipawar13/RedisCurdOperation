const express = require('express');
const app = express()
const BodyParser = require('body-parser');
const port = process.env.PORT || 4000;
app.use(express.json());

const UserRoutes = require('./Routes/User-Routes');

app.use(UserRoutes);

app.listen(port,() => {
    console.log(`Server is Running on ${port}`)
})

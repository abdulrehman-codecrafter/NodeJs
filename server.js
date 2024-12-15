const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConnection');
const todoRouter = require('./routes/todoRoutes');
const userRouter = require('./routes/userRoutes');

//app creation 
const PORT = process.env.PORT || 4000;
const app=express();

//middlewares
app.use(cors());    
app.use(bodyParser.json());



//config
dotenv.config();
dbConnection();


//routes

app.use('/todos',todoRouter);
app.use('/auth',userRouter)

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});
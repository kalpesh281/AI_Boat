 const express = require('express');
 const morgan=require("morgan")
 const cors=require("cors")
 const bodyParser=require("body-parser")
 const dotenv=require("dotenv");
const connectDB = require('./Db');

 dotenv.config()

connectDB();

 const app=express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


const PORT=process.env.PORT || 8080

 app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.DEV_MODE} on ${PORT}`);
 });
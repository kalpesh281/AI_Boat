 const express = require('express');
 const morgan=require("morgan")
 const cors=require("cors")
 const bodyParser=require("body-parser")
 const dotenv=require("dotenv");
const connectDB = require('./Db');
const errorHandler = require('./middlewares/errorMiddleware');

const authRoutes=require("./routes/authRoutes");

 dotenv.config()

connectDB();

 const app=express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler)
app.use(express.json())

const PORT=process.env.PORT || 8080

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/openai",require('./routes/openaiRoutes'))

 app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.DEV_MODE} on ${PORT}`);
 });
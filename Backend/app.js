const express = require('express');
const cors = require("cors")
const hpp = require('hpp')
const helmet = require("helmet");
const cookieParser = require('cookie-parser');
const expressMongoSanitize=require("express-mongo-sanitize");
const mongoose = require('mongoose')

const app = express();
require("dotenv").config()

app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit: '50mb' }));

const router = require('./src/routes/conversationRoute')
app.use("/api/v1", router)
const userRoute = require('./src/routes/userRoute')
app.use("/api/v1", userRoute)

//mongoDB Connection Here
mongoose.connect(process.env.dbUrl+"/"+process.env.dbName)
    .then(res => console.log("Database Connected"))
    .catch(err => console.log(err))


app.use("*",(req,res)=>{
    res.status(404).json({status:'Fail',data:"Not Found"})
})

module.exports=app
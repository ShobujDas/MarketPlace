const express = require('express');
const app = express();
const hpp=require("hpp");
const cors=require("cors")
const helmet=require("helmet");
const cookieParser = require('cookie-parser');
const expressMongoSanitize=require("express-mongo-sanitize");
require("dotenv").config()

app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(express.json({limit:'50mb'}));

//mongoDB Connection Here
//app.use("/api/v1",router)
app.use("*",(req,res)=>{
    res.status(404).json({status:'Fail',data:"Not Found"})
})
module.exports=app
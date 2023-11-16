const express = require('express');
const app = express();
const hpp=require("hpp");
const cors=require("cors")
const helmet=require("helmet");
const cookieParser = require('cookie-parser');
const expressMongoSanitize=require("express-mongo-sanitize");
const mongoose = require('mongoose')
require("dotenv").config()

app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(express.json({limit:'50mb'}));

//app.use("/api/v1",router)

//mongoDB Connection Here
console.log(process.env.dbUrl+"/"+process.env.dbName)
mongoose.connect(process.env.dbUrl+"/"+process.env.dbName)
    .then(()=> console.log("Database Connected"))
    .catch(err => console.log(err))


app.use("*",(req,res)=>{
    res.status(404).json({status:'Fail',data:"Not Found"})
})

module.exports=app
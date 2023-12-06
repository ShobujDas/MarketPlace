const express = require('express');
const cors = require("cors")
const hpp = require('hpp')
const helmet = require("helmet");
const cookieParser = require('cookie-parser');
const expressMongoSanitize=require("express-mongo-sanitize");
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express();
const routes = require('./src/routes/routes');

app.use(helmet());
app.use(hpp());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ limit: '50mb' }));


// route connection
app.use("/api/v1", routes)
dotenv.config()

//mongoDB Connection Here
mongoose.connect(process.env.dbUrl+"/"+process.env.dbName)
    .then(()=> console.log("Database Connected"))
    .catch(err => console.log(err))


app.use("*",(req,res)=>{
    res.status(404).json({status: 0, data:"Not Found"})
})

module.exports=app
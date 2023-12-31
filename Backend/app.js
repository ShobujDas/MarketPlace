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

const userRoute = require('./src/routes/userRoute')
app.use("/api/v1", userRoute)

const categoryRoutes = require('./src/routes/routes')
app.use("/api/v1", categoryRoutes)

const gigRoutes = require('./src/routes/gigRoute')
app.use("/api/v1", gigRoutes)

const orderRoutes = require('./src/routes/orderRoute')
app.use("/api/v1", orderRoutes)

const reviewRoute = require('./src/routes/reviewRoute')
app.use("/api/v1", reviewRoute)

//mongoDB Connection Here
mongoose.connect(process.env.dbUrl+"/"+process.env.dbName)
    .then(()=> console.log("Database Connected"))
    .catch(err => console.log(err))


app.use("*",(req,res)=>{
    res.status(404).json({status: 0, data:"Not Found"})
})

module.exports=app
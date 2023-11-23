const mongoose= require('mongoose')
const {Schema} =mongoose

const userSchema = new Schema({
    firstName:{
            type:String,
            required:true
        },
    lastName:{
            type:String,
            required:true
        },
    email:{
            type:String,
            required:true,
            unique:true
        },
    password:{
            type:String,
            required:true
        },
    img:{
            type:String,
            required:false
        },
    country:{
            type:String,
            required:false
        },
    phone:{
            type:String,
            required:true
        },
    decs:{
            type:String,
        },
    isSeller:{
            type:Boolean,
            default: false
        },
    city: {
        type: String,
        required: false
    },
    road: {
        type: String,
        required: false
    },
    houseNo: {
        type: String,
        required: false
    }
    },
    {
        timestamps:true,
        versionKey: false
    }
)


const User = mongoose.model('user', userSchema); 
module.exports = User; 
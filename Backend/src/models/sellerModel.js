const mongoose = require('mongoose')
const { Schema } = mongoose

const providerSchema = new Schema({

  serviceName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  decs: {
    type: String,
  },
  short_des: {
    type: String
  },
  isSeller: {
    type: Boolean,
    default: true
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
    timestamps: true,
    versionKey: false
  }
)


const providers = mongoose.model('service_providers', providerSchema);
module.exports = providers; 
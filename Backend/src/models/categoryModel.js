const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDesc:{
    type: String,
    required: true,
  },
  categoryImg:{
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false
})

const category = mongoose.model('categories', categorySchema);
module.exports = category;
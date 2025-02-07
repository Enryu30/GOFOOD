const mongoose = require('mongoose');

const {Schema}= mongoose;

const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  data:{
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('user',UserSchema);


// Here we created schema and model and exported the model.
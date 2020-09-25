const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name : String , 
  password : String ,
  balance : Number 
},
  {
    timestamps: true
  }
);


const User = mongoose.model('User', UserSchema);



module.exports = User;
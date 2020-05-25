//mogodb setup
var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecom',{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
  if(!error){
    console.log('DB Conected');
  }
  else{
    console.log("DB Conection Error");
  }
});

const User=require('../models/user');


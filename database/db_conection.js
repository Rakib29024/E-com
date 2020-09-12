//mogodb setup
var mongoose  = require('mongoose');
const {PORT,DB}=require('../config');

const startConnection=()=>{
  try {
    mongoose.connect(DB,{ 
      useNewUrlParser: true,
     useUnifiedTopology: true ,
     useCreateIndex:true
    },(error)=>{
    if(!error){
      console.log('DB Conected To:'+PORT);
    }
    else{
      console.log("DB Conection Failed");
    }
  });
  } catch (error) {
    console.log("DB Conection Error");
    startConnection();
  }
}

startConnection();


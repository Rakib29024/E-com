//mogodb setup
var mongoose  = require('mongoose');
const startConnection=()=>{
  try {
    mongoose.connect('mongodb://localhost:27017/ecom',{ 
      useNewUrlParser: true,
     useUnifiedTopology: true ,
     useCreateIndex:true
    },(error)=>{
    if(!error){
      console.log('DB Conected');
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


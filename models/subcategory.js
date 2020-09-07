//Require Mongoose
var mongoose = require('mongoose'); 

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  category_id: {type: String, Trim:true, required: true},
  
  title: {type: String, Trim:true, required: true},
  slug: {type: String, Trim:true, required: true},
  logo: {type: String, Trim:true, required: true},
  status: {type: String, Trim:true, required: true,default:'Active'}
});

// export schema
module.exports = mongoose.model('SubCategory', UserModelSchema);
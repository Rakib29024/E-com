//Require Mongoose
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose'); 

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  username: {type: String, required: true},
  slug: {type: String, required: true},
  type: {type: String, required: true,default: 'user'},
  email: {type: String, required: true},
  contact: {type: String, required: true}
});

// plugin for passport-local-mongoose 
UserModelSchema.plugin(passportLocalMongoose); 
// export schema
module.exports = mongoose.model('User', UserModelSchema);
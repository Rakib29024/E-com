//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  name: {type: String, required: true},
  slug: {type: String, required: true},
  type: {type: String, required: true},
  email: {type: String, required: true},
  contact: {type: String, required: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', UserModelSchema);
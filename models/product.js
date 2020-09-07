//Require Mongoose
var mongoose = require('mongoose'); 

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  category_id: {type: String, Trim:true, required: true},
  sub_category_id: {type: String, Trim:true, required: false},

  title: {type: String, Trim:true, required: true},
  slug: {type: String, Trim:true, required: true},
  description: {type: String, Trim:true, required: true},
  price: {type: Number, Trim:true, required: true},
  qty: {type: Number, Trim:true, required: true},
  color: {type: String, Trim:true, required: false},
  size: {type: String, Trim:true, required: false},
  width: {type: Number, Trim:true, required: false},
  height: {type: Number, Trim:true, required: false},
  depth: {type: Number, Trim:true, required: false},
  weight: {type: Number, Trim:true, required: false},
  user_type: {type: String, Trim:true, required: true},
  item_type: {type: String, Trim:true, required: false},
  youtube: {type: String, Trim:true, required: false},
  status: {type: String, Trim:true, required: true,default:'Active'}
});

// export schema
module.exports = mongoose.model('Product', UserModelSchema);
var mongoose  = require('mongoose');
var User=mongoose.model('User');

/*
module.exports={
    home:async()=>{
        res.render('frontend/index', {title: 'ecom' });
    },
}
*/
//index
exports.index=(req,res,next)=>{
    res.render('frontend/index', {title: 'ecom' });
}

//category
exports.category=(req,res,next)=>{
    res.render('frontend/category', {title: 'ecom' });
}

//cart
exports.cart=(req,res,next)=>{
    res.render('frontend/cart', {title: 'ecom' });
}

//product-detail
exports.product_detail=(req,res,next)=>{
    res.render('frontend/product_detail', {title: 'ecom' });
}

//about
exports.about=(req,res,next)=>{
    res.render('frontend/about', {title: 'ecom' });
}

//contact
exports.contact=function(req,res,next){
    res.render('frontend/contact', {title: 'ecom' });
}

//profile
exports.my_profile=function(req,res,next){
    res.render('frontend/my_profile', {title: 'ecom' });
}



//test

exports.data=function(req,res,next){
    var user_dtaa=user.find();
    res.send({
        name:'rakib',
        type:'admin'
    });
}

var user=require('../models/user');

//index
exports.index=function(req,res,next){
    res.render('frontend/index', {title: 'ecom' });
}

//category
exports.category=function(req,res,next){
    res.render('frontend/category', {title: 'ecom' });
}

//cart
exports.cart=function(req,res,next){
    res.render('frontend/cart', {title: 'ecom' });
}

//product-detail
exports.product_detail=function(req,res,next){
    res.render('frontend/product_detail', {title: 'ecom' });
}

//about
exports.about=function(req,res,next){
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


var mongoose  = require('mongoose');
var User=mongoose.model('User');
var slugify = require('slugify');
const { check, validationResult } = require('express-validator');
const app = require('../../app');


//login
exports.login = (req,res,next)=>{
    var data=req.body;
    console.log(data);
    res.render('frontend/login', {title: 'ecom' });
}


//login post
exports.post_login = (req,res,next)=>{
    const errors=validationResult(req);
    var data=req.body;
    if(!errors.isEmpty()){
        // console.log(data);
        // res.send({errors:errors.mapped(),formdata:data});
        res.render('frontend/login',{errors:errors.mapped(),formdata:data});
    }else{
        console.log(data);
        // res.render('frontend/login', {title: 'ecom' });
        res.redirect('/');
    }
    
}

//register
exports.register = (req,res,next)=>{
    var data=req.body;
    console.log(data);
    res.render('frontend/register', {title: 'ecom' });
}


//register post
exports.post_register = (req,res,next)=>{
    const errors=validationResult(req);
    var data=req.body;
    if(!errors.isEmpty()){
        // console.log(data);
        // res.send({errors:errors.mapped(),formdata:data});
        res.render('frontend/register',{errors:errors.mapped(),formdata:data});
    }else{
        console.log(data);
        var user=new User();
        user.name=req.body.name;
        user.email=req.body.email;
        user.contact=req.body.contact;
        user.password=req.body.password;
        user.slug=slugify(req.body.name);
        user.save((err,doc)=>{
            if(!err){
                console.log("data inserted");
                res.redirect('/');
            }else{
                console.log("error during data insertion:"+err);
                res.redirect('/register');
            }
        });
    }

}
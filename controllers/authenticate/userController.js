var mongoose  = require('mongoose');
var User=mongoose.model('User');
var slugify = require('slugify');
const { check, validationResult } = require('express-validator');

//=============lines can use===================
// res.redirect('/login');
//res.render('frontend/login',{errors:errors.mapped(),formdata:data});

//login
exports.login = (req,res,next)=>{
    var data=req.body;
    console.log(data);
    res.render('frontend/login', {title: 'ecom | Login' });
}


//login post
exports.post_login = (req,res,next)=>{
    const errors=validationResult(req);
    var data=req.body;
    if(!errors.isEmpty()){
        res.send({errors:errors.mapped(),formdata:data});
    }else{
        User.findOne({ email: req.body.email }, (err, existingUser)=>{
            if(err){
                res.send(err);
            }
            passport.authenticate('local')(req,res,next);
            res.status(200).send(existingUser);
        });
    }
    
}

//logout

exports.logout=(req,res,next)=>{
    req.logout();
    res.status(200).send({message:'User Logged Out'})
}

//register
exports.register = (req,res,next)=>{
    res.render('frontend/register', {title: 'ecom | Registration' });
}


//register post
exports.post_register = (req,res,next)=>{
    const errors=validationResult(req);
    var data=req.body;
    if(!errors.isEmpty()){
        res.send({errors:errors.mapped(),formdata:data});
    }else{
        var newUser=new User({
            username:req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            password:req.body.password,
            slug:slugify(req.body.name)
        });
        User.register(newUser,req.body.password,function(err,user){
            if(err){
                res.send({message:"error during data insertion:",err});
            }
            console.log("data inserted");
            res.status(201).send({message:'Success',createdUser:user});        
        });
    }

}
var mongoose  = require('mongoose');
var User=mongoose.model('User');
var slugify = require('slugify');
const { check, validationResult } = require('express-validator');

module.exports = {
    //login
    login (req,res,next){
        var data=req.body;
        console.log(data);
        res.render('frontend/login', {title: 'ecom | Login' });
    },
    //login post
    async post_login (req,res,next){
        const errors=validationResult(req);
        var data=req.body;
        if(!errors.isEmpty()){
            res.send({errors:errors.mapped(),formdata:data});
        }else{
            await User.findOne({ email: req.body.email }, (err, existingUser)=>{
                if(err){
                    res.send(err);
                }
                passport.authenticate('local')(req,res,next);
                res.status(200).send(existingUser);
            });
        }
        
    },
    //register
    register (req,res,next){
        res.render('frontend/register', {title: 'ecom | Registration' });
    },
    //register post
    async post_register (req,res,next){
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
            await User.register(newUser,req.body.password,function(err,user){
                if(err){
                    res.send({message:"error during data insertion:",err});
                }
                console.log("data inserted");
                res.status(201).send({message:'Success',createdUser:user});        
            });
        }

    },
    //logout
    logout (req,res,next){
        req.logout();
        res.status(200).send({message:'User Logged Out'})
    }
}
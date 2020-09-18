var mongoose  = require('mongoose');
var slugify = require('slugify');
var passport = require("passport");

var User=mongoose.model('User');
const { check, validationResult } = require('express-validator');

module.exports = {
    //login
    login (req,res,next){
        var data=req.body;
        console.log(data);
        res.render('frontend/login', {title: 'ecom | Login' });
    },
    //login post
    post_login (req,res,next){
        const errors=validationResult(req);
        var data=req.body;
        if(!errors.isEmpty()){
            res.send({errors:errors.mapped(),formdata:data});
        }else{
            passport.authenticate('local')(req, res, () => {
                console.log('Autheticated');
                User.findOne({
                  username: req.body.username
                }, (err, person) => {
                  console.log(person);
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.json({
                    success: true,
                    status: 'Login Successful!',
                  });
                });
              })
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
        if (req.isAuthenticated()) {
          req.logout();
          req.session.destroy((err) => {
            if (err) {
              console.log(err);
            } else {
              res.clearCookie('session-id');
              res.json({
                message: 'You are successfully logged out!'
              });
            }
          });
        } else {
          var err = new Error('You are not logged in!');
          err.status = 403;
          next(err);
        }
        // req.logout();
        // res.status(200).send({message:'User Logged Out'})
    }
}
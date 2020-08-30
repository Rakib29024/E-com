var mongoose  = require('mongoose');
var User=mongoose.model('User');
var slugify = require('slugify');
const { check, validationResult } = require('express-validator');

module.exports={
    async index(req,res,next){
        let users=await User.find();
        res.status(200).send({users});
    },
    async show(req,res,next){
        let users=await User.findById(req.params.id);
        res.status(200).send({users});
    },
    create(req,res,next){
        res.status(200).send({users});
    },
    async edit(req,res,next){
        let users=await User.findById(req.params.id);
        res.status(200).send({users});
    },
    store(req,res,next){
        res.status(200).send({users});
    },
    async update(req,res,next){
        let users=await User.findById(req.params.id);
        res.status(200).send({users});
    },
    async delete(req,res,next){
        let users=await User.findById(req.params.id);
        res.status(200).send({users});
    }
}
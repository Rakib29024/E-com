var mongoose  = require('mongoose');
var Category=mongoose.model('Category');
var slugify = require('slugify');
const { check, validationResult } = require('express-validator');

module.exports={
    async index(req,res,next){
        let categories=await Category.find();
        res.status(200).send({categories});
    },
    async show(req,res,next){
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    },
    create(req,res,next){
        res.status(200).send({categories});
    },
    async edit(req,res,next){
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    },
    store(req,res,next){
        res.status(200).send({categories});
    },
    async update(req,res,next){
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    },
    async delete(req,res,next){
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    }
}
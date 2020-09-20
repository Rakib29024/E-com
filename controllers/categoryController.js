var mongoose  = require('mongoose');
var Category=mongoose.model('Category');
var slugify = require('slugify');
const { check, validationResult } = require('express-validator');

module.exports={
    index:async(req,res,next)=>{
        let categories=await Category.find();
        res.status(200).send({categories});
    },

    show:async(req,res,next)=>{
        let category=await Category.findById(req.params.id);
        res.status(200).send({category});
    },

    create:(req,res,next)=>{

    },

    edit:async(req,res,next)=>{
        let category=await Category.findById(req.params.id);
        res.status(200).send({category});
    },

    store:async(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.json({error:errors.mapped(),formData:req.body});
        }
        var newCategory = new Category({
            title: req.body.title,
            logo: req.body.logo,
            status: req.body.status,
            slug: slugify(req.body.title)
        });
        await newCategory.save((err, storeCategory) => {
            if (err) {
                return res.json({
                    error: err
                });
            }
            return res.json({
                category: storeCategory
            });
        });
        
    },

    update:async(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.json({error:errors.mapped(),formData:req.body});
        }
        await Category.findByIdAndUpdate(req.params.id, {
                status: req.body.status,
                title: req.body.title,
                logo: req.body.logo
            },
            (err, category) => {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if(!category){
                    return res.json({message:"Categoiry doesn't exits"});
                }
                return res.json({
                    success: true,
                    message: 'Category Updated'
                });
            });
        

    },

    delete:async(req,res,next)=>{
        await Category.findByIdAndRemove(req.params.id,(err,category)=>{
            if(err){
                return res.json({error:err});
            }
            return res.json({success:true,message:"Category Successfully deleted"});
        });
    }
}
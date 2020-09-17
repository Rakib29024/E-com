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
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    },

    create:(req,res,next)=>{

    },

    edit:async(req,res,next)=>{
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    },
    store:async(req,res,next)=>{
        const errors=validationResult(req);
        var data=req.body;
        if(!errors.isEmpty()){
            res.json({errors:errors.mapped(),formdata:data});
        }else{
            var newCategory=new Category({
                title:req.body.title,
                logo:req.body.logo,
                status:req.body.status,
                slug:slugify(req.body.title)
            });
            await newCategory.save((err,storeCategory)=>{
                if(err){
                    res.json({error:err});
                }
                console.log("data inserted");
                 res.json({category:storeCategory});
            });
        }
    },
    update:async(req,res,next)=>{
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    },
    delete:async(req,res,next)=>{
        let categories=await Category.findById(req.params.id);
        res.status(200).send({categories});
    }
}
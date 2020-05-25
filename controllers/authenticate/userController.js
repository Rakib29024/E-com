
//login
exports.login=function(req,res,next){
    var data=req.body;
    console.log(data);
    res.render('frontend/login', {title: 'ecom' });
}


//login post
exports.post_login=function(req,res,next){
    var data=req.body;
    console.log(data);
    res.render('frontend/login', {title: 'ecom' });
}

//register post
exports.post_register=function(req,res,next){
    var data=req.body;
    console.log(data);
    res.render('frontend/login', {title: 'ecom' });
}
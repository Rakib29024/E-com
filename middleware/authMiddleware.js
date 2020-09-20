module.exports={
    isAuth:(req,res,next)=>{
        if(!req.isAuthenticated()){
            return res.status(401).json({message:'You are not Authenticted'});
        }
        return next();
    }
    ,
    isAdmin:()=>{
        if(!req.isAuthenticated() && req.user.type!=='admin'){
            return res.status(401).json({message:'You are not Authorized'});
        }
        return next();
    }
}
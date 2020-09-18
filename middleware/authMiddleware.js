module.exports={
    isAuth:(req,res,next)=>{
        if(!req.isAuthenticated()){
            return res.status(401).json({message:'You are not Authorized'});
        }
        return next();
    }
    ,
    isAdmin:()=>{

    }
}
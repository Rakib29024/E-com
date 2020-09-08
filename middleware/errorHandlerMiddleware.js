module.exports={
    errorHandler:(fn)=>{
        (res,req,next)=>{
            Promise.resolve(fn(res,req,next))
                   .catch(next);
        }
    }
}
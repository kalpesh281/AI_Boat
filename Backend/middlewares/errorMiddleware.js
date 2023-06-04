const errorResponce = require("../utils/errorResponce");

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message


    if(err.name=='castError'){
        const message="Resource not found"
        error=new errorResponce(message,404)
    }

    if(err.code==11000){
        const message="Duplicate field value entered"
        error=new errorResponce(message,400)
    }
    
    if(err.name=="ValidationError"){
        const message=Object.values(err.error).map((val)=>val.message);
        error=new errorResponce(message,400);
        res.status(error.statusCode || 500).json({
            success:false,
            error:error.message || "Server error"
        })
    }

}

module.exports=errorHandler
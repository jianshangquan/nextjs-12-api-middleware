module.exports = function withRequestMethod(method = [], callback){
    method = method.map(m => m.toUpperCase());
    return async (req, res, next) => {
        if(method.length > 0 && method.includes(req.method)){
            callback(req, res, next);
        }else{
            next();
        }
    }
}


const { HttpResponse } = require('standard-http-response-js');

module.exports = function devMiddleware(allowMethods = []){
    const med = allowMethods.map(m => m.toUpperCase());
    return function (req, res, next) {
        if(process.env.NODE_ENV == 'development' && med.includes(req.method)){
            return next();
        }
        return res.status(401).send(HttpResponse.error({ 
            errorMsg: 'This API allow only in development' 
        }))
    }
}
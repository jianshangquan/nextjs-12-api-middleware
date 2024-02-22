
const { HttpResponse } = require('standard-http-response-js');

module.exports = class MethodRouter{

    methodCallbacks = {
        GET: null,
        POST: null,
        PUT: null,
        DELETE: null,
        PATCH: null,
        HEAD: null,
        CONNECT: null,
        TRACE: null,
        OPTIONS: (req, res, next) => {
            next();
        }
    };


    use(method = 'GET', callback){
        this.methodCallbacks[method.toUpperCase()] = callback;
    }

    get(callback){
        this.methodCallbacks.GET = callback;
    }

    post(callback){
        this.methodCallbacks.POST = callback;
    }

    put(callback){
        this.methodCallbacks.PUT = callback;
    }

    delete(callback){
        this.methodCallbacks.DELETE = callback;
    }

    options(callback){
        this.methodCallbacks.OPTIONS = callback;
    }

    trace(callback){
        this.methodCallbacks.TRACE = callback;
    }

    connect(callback){
        this.methodCallbacks.CONNECT = callback;
    }

    patch(callback){
        this.methodCallbacks.PATCH = callback;
    }

    head(callback){
        this.methodCallbacks.HEAD = callback;
    }

    
    handler(){
        return async (req, res, next) => {
            if(this.methodCallbacks[req.method.toString().toUpperCase()])
                return await this.methodCallbacks[req.method.toString().toUpperCase()](req, res, next);

            res.send(HttpResponse.error({ message: 'No route found' }))
        }
    }
}
// const { HttpResponse } = require('standard-http-response-js');
import { HttpResponse, HttpMethods } from 'standard-http-response-js';




export function devMiddleware(allowMethods: HttpMethods[] = []) {
    const med = allowMethods.map(m => m.toUpperCase());
    return function (req: any, res: any, next: any) {
        if (process.env.NODE_ENV == 'development' && med.includes(req.method)) {
            return next();
        }
        return res.status(401).send(HttpResponse.error({
            errorMsg: 'This API allow only in development'
        }))
    }
}

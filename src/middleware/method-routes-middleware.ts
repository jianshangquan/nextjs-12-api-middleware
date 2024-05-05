
// const { HttpResponse } = require('standard-http-response-js');
import { HttpResponse, HttpMethods } from "standard-http-response-js";



export declare type RouteNextFunction = (data?: any) => void | any | Promise<any>;
export declare type RouterCallback = (req: any, res: any, next: RouteNextFunction) => void;
export declare type MethodCallbacks = Record<HttpMethods, RouterCallback | null | any>;



export class MethodRouter {

    private methodCallbacks: MethodCallbacks = {
        GET: null,
        POST: null,
        PUT: null,
        DELETE: null,
        PATCH: null,
        HEAD: null,
        CONNECT: null,
        TRACE: null,
        OPTIONS: (req: any, res: any, next: RouteNextFunction) => {
            next();
        }
    }



    use(method = 'GET', callback: RouterCallback) {
        this.methodCallbacks[method.toUpperCase() as HttpMethods] = callback;
    }

    get(callback: RouterCallback) {
        this.methodCallbacks.GET = callback;
    }

    post(callback: RouterCallback) {
        this.methodCallbacks.POST = callback;
    }

    put(callback: RouterCallback) {
        this.methodCallbacks.PUT = callback;
    }

    delete(callback: RouterCallback) {
        this.methodCallbacks.DELETE = callback;
    }

    options(callback: RouterCallback) {
        this.methodCallbacks.OPTIONS = callback;
    }

    trace(callback: RouterCallback) {
        this.methodCallbacks.TRACE = callback;
    }

    connect(callback: RouterCallback) {
        this.methodCallbacks.CONNECT = callback;
    }

    patch(callback: RouterCallback) {
        this.methodCallbacks.PATCH = callback;
    }

    head(callback: RouterCallback) {
        this.methodCallbacks.HEAD = callback;
    }


    handler() {
        return async (req: any, res: any, next: RouteNextFunction) => {
            if (this.methodCallbacks[req.method.toString().toUpperCase() as HttpMethods])
                return await this.methodCallbacks[req.method.toString().toUpperCase() as HttpMethods](req, res, next);

            res.send(HttpResponse.error({ message: 'No route found' }))
        }
    }
}
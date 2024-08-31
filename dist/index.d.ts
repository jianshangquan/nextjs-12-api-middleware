import { HttpMethods } from 'standard-http-response-js';

declare function devMiddleware(allowMethods?: HttpMethods[]): (req: any, res: any, next: any) => any;

declare type RouteNextFunction = (data?: any) => void | any | Promise<any>;
declare type RouterCallback = (req: any, res: any, next: RouteNextFunction) => void;
declare type MethodCallbacks = Record<HttpMethods, RouterCallback | null | any>;
declare class MethodRouter {
    private methodCallbacks;
    use(method: string | undefined, callback: RouterCallback): void;
    get(callback: RouterCallback): void;
    post(callback: RouterCallback): void;
    put(callback: RouterCallback): void;
    delete(callback: RouterCallback): void;
    options(callback: RouterCallback): void;
    trace(callback: RouterCallback): void;
    connect(callback: RouterCallback): void;
    patch(callback: RouterCallback): void;
    head(callback: RouterCallback): void;
    handler(): (req: any, res: any, next: RouteNextFunction) => Promise<any>;
}

declare function PreflightMiddleware(req: any, res: any, next: RouteNextFunction): void;

type onErrorCallback = (error: any, req: any, res: any) => void;
declare function withMiddleware(next: RouterCallback[] | undefined, onError: onErrorCallback | null): (req: any, res: any) => Promise<any>;
declare function isPromiseFunction(func: any): boolean;

declare function withRequestMethod(method: HttpMethods[] | undefined, callback: RouterCallback): (req: any, res: any, next: any) => Promise<void>;

export { MethodCallbacks, MethodRouter, PreflightMiddleware, RouteNextFunction, RouterCallback, devMiddleware, isPromiseFunction, withMiddleware, withRequestMethod };

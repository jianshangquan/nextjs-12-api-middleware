import { HttpMethods } from "standard-http-response-js";
export declare type RouteNextFunction = (data?: any) => void | any | Promise<any>;
export declare type RouterCallback = (req: any, res: any, next: RouteNextFunction) => void;
export declare type MethodCallbacks = Record<HttpMethods, RouterCallback | null | any>;
export declare class MethodRouter {
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

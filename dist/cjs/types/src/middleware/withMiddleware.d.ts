import { RouterCallback } from "./method-routes-middleware";
type onErrorCallback = (error: any, req: any, res: any) => void;
export declare function withMiddleware(next: RouterCallback[] | undefined, onError: onErrorCallback | null): (req: any, res: any) => Promise<any>;
export declare function isPromiseFunction(func: any): boolean;
export {};

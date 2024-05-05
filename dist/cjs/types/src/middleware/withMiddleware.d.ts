import { RouterCallback } from "./method-routes-middleware";
export declare function withMiddleware(next?: RouterCallback[]): (req: any, res: any) => Promise<any>;
export declare function isPromiseFunction(func: any): boolean;

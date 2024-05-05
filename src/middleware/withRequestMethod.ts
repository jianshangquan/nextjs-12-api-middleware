import { HttpMethods } from "standard-http-response-js";
import { RouterCallback } from "./method-routes-middleware";

export function withRequestMethod(method: HttpMethods[] = [], callback: RouterCallback) {
    method = method.map(m => m.toUpperCase() as HttpMethods);
    return async (req: any, res: any, next: any) => {
        if (method.length > 0 && method.includes(req.method)) {
            callback(req, res, next);
        } else {
            next();
        }
    }
}


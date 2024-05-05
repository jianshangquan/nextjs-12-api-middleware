import { HttpMethods } from "standard-http-response-js";
import { RouterCallback } from "./method-routes-middleware";
export declare function withRequestMethod(method: HttpMethods[] | undefined, callback: RouterCallback): (req: any, res: any, next: any) => Promise<void>;

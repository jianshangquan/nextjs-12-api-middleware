import { RouteNextFunction } from "./method-routes-middleware";


export function PreflightMiddleware(req: any, res: any, next: RouteNextFunction) {
    if (req.method == 'OPTIONS') {
        console.log('preflight header with option')
        res.status(200).send('ok');
        return;
    }
    next();
}
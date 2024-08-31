import { RouterCallback } from "./method-routes-middleware";




type onErrorCallback = (error: any, req: any, res: any) => void;
export function withMiddleware(next: RouterCallback[] = [], onError: onErrorCallback | null) {

    return async function nextJSMiddleware(req: any, res: any) {

        let i = -1;
        const nextFun = async (req: any, res: any) => {
            i++;
            try {
                await next[i](req, res, async () => {
                    if (i + 1 < next.length) {
                        await nextFun(req, res);
                    }
                });
            } catch (e) {
                console.log('General error ', e)
                if(onError){
                    return onError(e, req, res);
                }

                return res.status(500).send({
                    status: 'Failed',
                    message: 'Unknown error occured',
                    payload: {}
                })
            }
        }


        try {
            await nextFun(req, res);
        } catch (err) {
            console.log('General error ', err)
            if(onError){
                return onError(err, req, res);
            }

            return res.status(500).send({
                status: 'Failed',
                message: 'Unknown error occured',
                payload: {}
            })
        }
    }
}


export function isPromiseFunction(func: any) {
    return Promise.resolve(func) == func;
}



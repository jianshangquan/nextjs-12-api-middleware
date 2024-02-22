module.exports.withMiddleware = function withMiddleware(next = []) {

    return async function nextJSMiddleware(req, res) {

        let i = -1;
        const nextFun = async (req, res) => {
            i++;
            try {
                await next[i](req, res, async () => {
                    if (i + 1 < next.length) {
                        await nextFun(req, res);
                    }
                });
            } catch (e) {
                console.log('General error ', e)
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
            console.log('General error ', error)
            return res.status(500).send({
                status: 'Failed',
                message: 'Unknown error occured',
                payload: {}
            })
        }
    }
}


module.exports.isPromiseFunction = function isPromiseFunction(func) {
    return Promise.resolve(func) == func;
}



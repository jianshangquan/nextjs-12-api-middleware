

module.exports = function PreflightMiddleware(req, res, next){
    if(req.method == 'OPTIONS'){
        console.log('preflight header with option')
        res.status(200).send('ok');
        return ;
    }
    next();
}
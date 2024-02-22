// module.exports = require('./middleware/cors-middleware');
module.exports.devMiddleware = require('./middleware/dev-middleware-filter');
module.exports.MethodRouter = require('./middleware/method-routes-middleware');
module.exports.PreflightMiddleware = require('./middleware/preflight-middleware');
module.exports.withRequestMethod = require('./middleware/withRequestMethod');

const { withMiddleware, isPromiseFunction } = require('./middleware/withMiddleware');
module.exports.withMiddleware = withMiddleware;
module.exports.isPromiseFunction = isPromiseFunction;



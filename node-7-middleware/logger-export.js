function loggerMiddleware(req, res, next) {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
}

module.exports = loggerMiddleware;
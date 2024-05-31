function requestTimeMiddleware(req, res, next) {
  const startTime = Date.now();

  next();

  const endTime = Date.now();

  const elapsedTime = endTime - startTime;

  console.log(`Request to ${req.url} processed in ${elapsedTime} ms`);
}

module.exports = requestTimeMiddleware;
function authenticationMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: 'Authorization header is missing'});
  }

  if (authToken !== 'valid_token') {
    return res.status(401).json({ error: 'Invalid authorization token' });
  }

  next();
}

module.exports = authenticationMiddleware;
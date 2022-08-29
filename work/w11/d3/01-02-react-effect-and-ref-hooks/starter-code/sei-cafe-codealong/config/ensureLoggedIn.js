module.exports = function(req, res, next) {
  // Send back status code 401 - 'Unathorized'
  // if not logged in
  if (!req.user) return res.status(401).json('Unauthorized');
  // everything is cool
  next();
};
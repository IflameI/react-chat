import { verifyJWTToken } from '../utils/index.js';

export default (req, res, next) => {
  if (req.path === '/user/signin' || req.path === '/user/signup' || req.path === '/user/verify') {
    return next();
  }

  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user) => {
      req.user = user.data._doc;
      next();
    })
    .catch(() => {
      res.status(403).json({ message: 'Invalid auth token provided.' });
    });
};

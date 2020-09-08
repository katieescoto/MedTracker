const router = require('express').Router()
module.exports = router
//const path = require('path')
//const app = express();

//router.use('/users', require('./users')); // matches all requests to /api/users/
//router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
//router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/



// any remaining requests with an extension (.js, .css, etc.) send 404
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

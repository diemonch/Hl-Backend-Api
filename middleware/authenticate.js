const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../config/config')
const User = require('../model/users');
const isAuthverified = (req,res,next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token,TOKEN_SECRET)
        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message:'You are not logged in to perform this task. Please login !!'
        })
    }
}

const getCurrentUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token,TOKEN_SECRET, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

module.exports = {
    isAuthverified:isAuthverified,
    getCurrentUser:getCurrentUser
}

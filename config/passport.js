const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

var User=require('../models/user');
const {checkPassword} = require('../lib/passwordValid');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.

// const verifyCallback = (username, password, done) => {

//   User.findOne({ username: username })
//       .then((user) => {

//           if (!user) { return done(null, false) }
          
//           const isValid = validPassword(password, user.hash, user.salt);
          
//           if (isValid) {
//               return done(null, user);
//           } else {
//               return done(null, false);
//           }
//       })
//       .catch((err) => {   
//           done(err);
//       });

// }

// const strategy  = new LocalStrategy(customFields, verifyCallback);

// passport.use(strategy);

passport.use(new LocalStrategy(
  function(username, password, cb) {
    User.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      console.log(checkPassword(password, user.hash, user.salt));
      if (!checkPassword(password, user.hash, user.salt)) { return cb(null, false); }
      // console.log(user.hash);
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
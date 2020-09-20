var usersRouter = require('express').Router();

//Controller
const AuthController = require('../controllers/authenticate/authController');
//validator
const { 
        user_login_val,
        user_register_val
      }=require('../validations/userValidation');
//Middleware
var {isAuth}=require('../middleware/authMiddleware');
// usersRouter.use(isAuth);
//=========================authentication==========================
//userAuthController
usersRouter.get('/login',isAuth, AuthController.login);
usersRouter.post('/login',user_login_val, AuthController.post_login);
usersRouter.get('/logout', AuthController.logout);
usersRouter.get('/register', AuthController.register);
usersRouter.post('/register', user_register_val,AuthController.post_register);

module.exports = usersRouter;

var router = require('express').Router();

//custom
const AuthController = require('../controllers/authenticate/authController');
const { 
        user_login_val,
        user_register_val
      }=require('../validations/userValidation');

//=========================authentication==========================
//userAuthController
router.get('/login', AuthController.login);
router.post('/login',user_login_val, AuthController.post_login);
router.get('/logout', AuthController.logout);
router.get('/register', AuthController.register);
router.post('/register', user_register_val,AuthController.post_register);

module.exports = router;

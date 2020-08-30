var router = require('express').Router();

//custom
const userController = require('../controllers/authenticate/userController');
const { 
        user_login_val,
        user_register_val
      }=require('../validations/userValidation');

//=========================authentication==========================
//userAuthController
router.get('/login', userController.login);
router.post('/login',user_login_val, userController.post_login);
router.get('/logout', userController.logout);
router.get('/register', userController.register);
router.post('/register', user_register_val,userController.post_register);

module.exports = router;

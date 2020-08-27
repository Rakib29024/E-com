var express = require('express');
var router = express.Router();
//controllers
var homeController=require('../controllers/homeController');
var userController=require('../controllers/authenticate/userController');
const { user_login_val,user_register_val }=require('../validations/userValidation');


//test
router.get('/data',homeController.data);

// clientside
//homeController
router.get('/', homeController.index);
router.get('/category', homeController.category);
router.get('/cart', homeController.cart);
router.get('/product_detail', homeController.product_detail);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);
router.get('/profile', homeController.my_profile);

//userController
router.get('/login', userController.login);
router.post('/login', user_login_val, userController.post_login);
router.get('/register', userController.register);
router.post('/register', user_register_val,userController.post_register);




// admin side
router.get('/admin',function(req, res, next) {
  res.render('backend/index', { layout:'backend/layout', title: 'Node JS Express Admin Side' });
});

router.get('*',(req,res)=>{
  res.redirect('/');
});




module.exports = router;

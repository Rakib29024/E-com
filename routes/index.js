var express = require('express');
var router = express.Router();
//controllers
var homeController=require('../controllers/homeController');
var userController=require('../controllers/authenticate/userController');


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
router.post('/login', userController.post_login);
router.post('/register', userController.post_register);




// admin side
router.get('/admin', function(req, res, next) {
  res.render('backend/index', { layout:'backend/layout', title: 'Node JS Express Admin Side' });
});

router.get('*',(req,res)=>{
  res.redirect('/');
});




module.exports = router;

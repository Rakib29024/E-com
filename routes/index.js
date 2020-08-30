var router = require('express').Router();
//controllers
const homeController=require('../controllers/homeController');



//=============================test==============================
// router.get('/data',homeController.data);



//=============================clientside=========================
//homeController
router.get('/', homeController.index);
router.get('/category', homeController.category);
router.get('/cart', homeController.cart);
router.get('/product_detail', homeController.product_detail);
router.get('/about',homeController.about);
router.get('/contact', homeController.contact);
router.get('/profile', homeController.my_profile);












module.exports = router;

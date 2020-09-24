var adminRouter = require('express').Router();


//controller
const UserController = require('../controllers/userController');
const CategoryController= require('../controllers/categoryController');
//validator
const {category_store_val,category_update_val}=require('../validations/categoryValidation');
//middleware
var {isAuth,isAdmin}=require('../middleware/authMiddleware');
adminRouter.use(isAuth);
adminRouter.use(isAdmin);

// ===============================admin side============================
  //users
  adminRouter.get('/users', UserController.index);
  adminRouter.get('/user/:id/show', UserController.show);
  adminRouter.get('/user/create', UserController.create);
  adminRouter.get('/user/:id/edit', UserController.edit);
  adminRouter.post('/user/:id/store', UserController.store);
  adminRouter.put('/user/:id/update', UserController.update);
  adminRouter.delete('/user/:id/delete', UserController.delete);

  //users
  adminRouter.get('/categories', CategoryController.index);
  adminRouter.get('/category/:id/show', CategoryController.show);
  adminRouter.get('/category/create', CategoryController.create);
  adminRouter.get('/category/:id/edit', CategoryController.edit);
  adminRouter.post('/category/store', category_store_val,CategoryController.store);
  adminRouter.put('/category/:id/update', category_update_val,CategoryController.update);
  adminRouter.delete('/category/:id/delete', CategoryController.delete);


  module.exports = adminRouter;

var router = require('express').Router();

//custom
const UserController = require('../controllers/userController');
const CategoryController= require('../controllers/categoryController');

// ===============================admin side============================
  //users
  router.get('/users', UserController.index);
  router.get('/user/:id/show', UserController.show);
  router.get('/user/create', UserController.create);
  router.get('/user/:id/edit', UserController.edit);
  router.post('/user/:id/store', UserController.store);
  router.put('/user/:id/update', UserController.update);
  router.delete('/user/:id/delete', UserController.delete);

  //users
  router.get('/categories', CategoryController.index);
  router.get('/category/:id/show', CategoryController.show);
  router.get('/category/create', CategoryController.create);
  router.get('/category/:id/edit', CategoryController.edit);
  router.post('/category/:id/store', CategoryController.store);
  router.put('/category/:id/update', CategoryController.update);
  router.delete('/category/:id/delete', CategoryController.delete);


  module.exports = router;

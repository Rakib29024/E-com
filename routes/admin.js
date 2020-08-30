var router = require('express').Router();

//custom
const userController = require('../controllers/userController');

// ===============================admin side============================
router.get('/dashboard',function(req, res, next) {
    res.render('backend/index', { layout:'backend/layout', title: 'Node JS Express Admin Side' });
  });
  //
  router.get('/users', userController.index);
  router.get('/user/:id/show', userController.show);
  router.get('/user/create', userController.create);
  router.get('/user/:id/edit', userController.edit);
  router.post('/user/:id/store', userController.store);
  router.put('/user/:id/update', userController.update);
  router.delete('/user/:id/delete', userController.delete);

  module.exports = router;

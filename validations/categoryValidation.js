const { check, validationResult } = require('express-validator');

exports.category_store_val=[
    check('title','Invalid Title').isString().trim().notEmpty(),
    check('logo','Invalid logo').isString().trim().notEmpty(),
    check('status','Invalid status').isString().trim().notEmpty()
]

exports.category_update_val=[
    check('title','Invalid Title').isString().trim().notEmpty(),
    check('logo','Invalid logo').isString().trim().notEmpty(),
    check('status','Invalid status').isString().trim().notEmpty()
]
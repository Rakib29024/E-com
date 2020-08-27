const { check, validationResult } = require('express-validator');

exports.user_login_val=[
    check('email','Invalid E-mail').notEmpty().isEmail(),
    check('password','Invalid Password').notEmpty().isLength({min:6}),
]

exports.user_register_val=[
    check('name','Enter Your Name').notEmpty(),
    check('email','Invalid E-mail').notEmpty().isEmail(),
    check('contact','Invalid Contact').notEmpty().isMobilePhone().isNumeric().isLength({min:9,max:15}),
    check('password','Invalid Password').notEmpty().isLength({min:6}),
]
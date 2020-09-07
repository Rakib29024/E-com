const { check, validationResult } = require('express-validator');

exports.user_login_val=[
    check('email','Invalid E-mail').isString().trim().notEmpty().isEmail(),
    check('password','Password must be greater than 5 digit').trim().notEmpty().isLength({min:6}),
]

exports.user_register_val=[
    check('name','Enter Your Name').notEmpty().isLength({min:3}),
    check('email','Invalid E-mail').notEmpty().isEmail(),
    check('contact','Invalid Contact').notEmpty().isMobilePhone().isNumeric().isLength({min:9,max:15}),
    check('password','Password must be greater than 5 digit').notEmpty().isLength({min:6}),
]
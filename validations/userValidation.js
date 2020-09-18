const { check, validationResult } = require('express-validator');

exports.user_login_val=[
    check('username','Invalid E-mail').isString().trim().notEmpty(),
    check('password','Password must be greater than 3 digit').trim().notEmpty().isLength({min:3}),
]

exports.user_register_val=[
    check('name','Enter Your Name').notEmpty().isLength({min:3}),
    check('email','Invalid E-mail').notEmpty().isEmail(),
    check('contact','Invalid Contact').notEmpty().isMobilePhone().isNumeric().isLength({min:9,max:15}),
    check('password','Password must be greater than 3 digit').notEmpty().isLength({min:3}),
]
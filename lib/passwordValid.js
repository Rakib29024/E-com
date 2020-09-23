const passwordHash = require('password-hash');
const bcrypt = require('bcrypt');

module.exports={
    checkPassword:(password, hash, salt)=>{
        return passwordHash.verify(password, hash)
    },

    genPassword:(password)=>{
        hashPassord=passwordHash.generate(password)
        console.log(hashPassord)
        return hashPassord;
    }
}
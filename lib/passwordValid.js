const passwordHash = require('password-hash');

module.exports={
    checkPassword:(password, hash, salt)=>{
        console.log(passwordHash.generate(password)+'000'+passwordHash.generate(password));
        return true;
    }
}
var User=require('../../models/user');
var mongoose  = require('mongoose');


mongoose.connect('localhost:27017/ecom');


var user= [
    new User({
        name:'Rakib',
        slug:'Rakib-10',
        type:'admin',
        email:'Rakib29024@gmail.com',
        contact:'01775555372',
        password:'010'

    }),
    new User({
        name:'Hassan',
        slug:'Rakib-10',
        type:'user',
        email:'Rakib29024@hotmailo.com',
        contact:'01775555372',
        password:'010'

    })

];

for(var i=0;i<user.length;i++){
    user[i].save();

}

mongoose.disconnect();
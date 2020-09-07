const faker = require('faker');
var passwordHash = require('password-hash');
const MongoClient = require("mongodb").MongoClient;

const User=require('../../models/user');

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "ecom";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(!err){
        const db = client.db(dbName);
        const usersCollection = db.collection("users");
    
        qty=10;
        users=[];
        try {
            for(let i=0;i<qty;i++){
                users.push(
                    new User({
                        username:faker.internet.userName(),
                        type:'admin',
                        email:faker.internet.email(),
                        contact:faker.phone.phoneNumber(),
                        hash:passwordHash.generate('010')
                    })
                );
            }
            try {
                usersCollection.insertMany(users);
                console.log(users);
            } catch (error) {
                console.log('DB insert error due to:'+error)
            }
        } catch (error) {
            console.log(error);
        }
    }
    else{
        console.log(err);
    }

    client.close();

});



const faker = require('faker');
const MongoClient = require("mongodb").MongoClient;

const Category=require('../../models/category');

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "ecom";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(!err){
        const db = client.db(dbName);
        const categoriesCollection = db.collection("categories");
    
        qty=10;
        categories=[];
        try {
            for(let i=0;i<qty;i++){
                categories.push(
                    new Category({
                        title:faker.name.title(),
                        slug:faker.lorem.slug(),
                        logo:faker.image.imageUrl(),
                        status:'Active'
                    })
                );
            }
            try {
                categoriesCollection.insertMany(categories);
                console.log(categories);
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


